import { HttpStatus, Injectable } from '@nestjs/common';
import { defaults, RequestPromiseAPI } from 'request-promise';
import { Response } from 'request';
import * as progress from 'request-progress';
import * as figlet from 'figlet';
import * as JSZip from 'jszip';
import * as fs from 'fs';

@Injectable()
export class Utils 
{
    private http: RequestPromiseAPI;

    constructor()
    {
        this.http = defaults({
            jar: true,
            gzip: true,
            encoding: 'latin1',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            }
        });
    }

    /**
     * @description
     * 
     * Descarga EL Padron reducido de SUNAT 
     * @param {string} link 
     * @returns {{success: boolean, padron: string}}
     */
    public async download(link: string): Promise<{success: boolean, padron: string}>
    {
        return await progress(this.http({
            method: 'GET', 
            url: link,
            encoding: null, // <-- IMPORTANTE!
            transform: (body: any, response: Response) => {
                if (response.statusCode === HttpStatus.OK)
                {
                    const buffer = Buffer.from(body, 'utf8');
                    fs.writeFileSync('./padron_reducido.zip', buffer);
                    return {
                        success: true,
                        padron: body
                    }
                }
                else
                {
                    return {
                        success: false,
                        padron: ''
                    }
                }
            }, 
        }))
        .on('progress', (state) => {
            process.stdout.write(`--${(Math.round(state.percent*100))} % `);
        })
        .on('error',  (error) => {
            console.log('Error al descargar archivo [.zip] de la service de sunat.', error);
        })
        .on('end', () => {
            console.log(figlet.textSync('Descargado Exitosamente.'));
        });
    }

    /**
     * @description Obtiene los datos del archivo [.Zip]
     * @param zipFile [string]
     * @return [Promise<string>]
     */
    public async stractZip(zipFile: string): Promise<Buffer>
    {
        try {
            const zip = new JSZip();
            const data = await zip.loadAsync(zipFile);
            return await data.file(/^.*\.txt$/)[0].async('nodebuffer');
        } catch (e) {
            throw e;
        }
    }
}