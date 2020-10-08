import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TaxPayer } from '@api/app/taxpayer/taxpayer.model';

@Injectable()
export class TaxPayerService 
{

    /**
     * @description
     * 
     * Constructor
     * @param {Repository<TaxPayer>}
     */
    constructor(
        @InjectRepository(TaxPayer) private readonly taxPayerRepository: Repository<TaxPayer>
    )
    {
    }

    /**
     * @description
     * 
     * Guardar Padron Reducido 
     * @return {s}
     */
    public processPadron(file: string): Promise<any>
    {
        try {
            this.taxPayerRepository.clear();
            return this.taxPayerRepository.query(`
                LOAD DATA LOCAL INFILE '${file.replace(/\\/g, '/')}'
                INTO TABLE taxpayer CHARACTER SET latin1
                FIELDS TERMINATED BY '|' 
                ENCLOSED BY '"' 
                LINES TERMINATED BY '\n' 
                IGNORE 1 LINES
                    (
                        ruc,
                        razon_social,
                        estado,
                        condicion,
                        ubigeo,
                        tipo_via,
                        nombre_via,
                        codigo_zona,
                        tipo_zona,
                        numero,
                        interior,
                        lote,
                        departamento,
                        manzana,
                        kilometro
                    );
            `);
        } catch (e) {
            throw new ForbiddenException(e);
        }
    }
}