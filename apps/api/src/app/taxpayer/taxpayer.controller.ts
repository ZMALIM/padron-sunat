import {
    Controller,
    Get,
    Res,
    HttpService
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

import { TaxPayerService } from '@api/app/taxpayer/taxpayer.service';

import * as fs from 'fs';
import * as path from 'path';
import * as ProgressBar from 'progress';
import * as AdmZip from 'adm-zip';

@Controller('taxpayer')
export class TaxPayerController
{
    /**
     * @description
     *
     * Construtor
     * @param {TaxPayerService} _taxPayerService
     */
    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService,
        private readonly taxPayerService: TaxPayerService,
    )
    {
    }

    @Get('download')
    public async download(): Promise<{success: boolean, message: string}>
    {
        try {
            const url: string = this.configService.get<string>('API_PADRON_URL');
            if (fs.existsSync(this.fileZipPath))
            {
                return {
                    success: true,
                    message: 'El Padron reducido ya fue descargado anteriormente.'
                }
            }
            else 
            {
                const response = await this.httpService.get(url, {
                    responseType: 'stream',
                }).toPromise();
                const totalLength = response.headers['content-length']
                const progressBar = new ProgressBar('-> downloading [:bar] :percent :current/:total :etas', {
                    width: 40,
                    complete: '=',
                    incomplete: ' ',
                    renderThrottle: 1,
                    total: parseInt(totalLength, 10)
               });
                const file = fs.createWriteStream(this.fileZipPath);
                response.data.on('data', (chunk) => progressBar.tick(chunk.length));
                response.data.pipe(file);
                return new Promise((resolve, reject) => {
                    file.on('finish', () => {
                        resolve({
                            success: true,
                            message: 'Datos Descargados de SUNAT Correctamente'
                        });
                    });

                    file.on('error', reject)
                });
            }

        } catch (e) {
            return {
                success: false,
                message: e.toString()
            }
        }
    }

    @Get('extract')
    public async extract(): Promise<any>
    {
        try {
            const zip = new AdmZip(this.fileZipPath);
            const entries = zip.getEntries();
            if (fs.existsSync(path.resolve(this.fileTxtPath, 'padron_reducido_ruc.txt')))
            {
                return await {
                    success: true,
                    message: 'El Padron reducido ya se ha descompromido anteriormente'
                };
            }
            else 
            {
                await zip.extractAllToAsync(this.fileTxtPath, true);
                return await {
                    success: true,
                    message: 'Padron Reducido Descompromido Correctamente'
                };
            }
        } catch (e) {
            return {
                success: false,
                message: e
            }
        }
    }

    @Get('load')
    public async loadData(): Promise<any>
    {
        try {
            const txtFile = path.resolve(this.fileTxtPath, 'padron_reducido_ruc.txt');
            await this.taxPayerService.processPadron(txtFile);
            return {
                success: true,
                message: 'Datos csv cargados correctamente.'
            }
        } catch (e) {
            return {
                success: false,
                message: e
            }
        }
    }

    public async downloadAndSave(url: string): Promise<{success: boolean, message: string}>
    {
        const response = await this.httpService.get('http://download1490.mediafire.com/3yz1fucg07sg/cpgw0vl8c479a73/mini-padron.zip', {
            responseType: 'stream',
        }).toPromise();
        const totalLength = response.headers['content-length']
        const progressBar = new ProgressBar('-> downloading [:bar] :percent :current/:total :etas', {
            width: 40,
            complete: '=',
            incomplete: ' ',
            renderThrottle: 1,
            total: parseInt(totalLength, 10)
       });
        const file = fs.createWriteStream(this.fileZipPath);
        response.data.on('data', (chunk) => progressBar.tick(chunk.length));
        response.data.pipe(file);
        return new Promise((resolve, reject) => {
            file.on('finish', () => {
                resolve({
                    success: true,
                    message: 'ookoko'
                });
            }),
            file.on('error', reject)
        });
    }

    /**
     * @description
     * 
     * Obtienes la ruta del archivo .ZIP descargado
     * @returns {string}
     */
    private get fileZipPath(): string
    {
        return path.resolve(
            'files', 
            'zip',
            `padron_reducido_ruc_${new Date().getDay().toString()}_${new Date().getMonth().toString()}_${new Date().getFullYear().toString()}.zip`,
         ); 
    }

    /**
     * @description
     * 
     * Obtiene La ruta del archivo .TXT Descomprimido
     * @returns {string}
     */
    private get fileTxtPath(): string
    {
        return path.resolve(
            'files', 
            'txt',
            `padron_reducido_ruc_${new Date().getDay().toString()}_${new Date().getMonth().toString()}_${new Date().getFullYear().toString()}`,
         );  
    }
}