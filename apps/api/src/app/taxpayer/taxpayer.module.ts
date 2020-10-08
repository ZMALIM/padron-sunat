import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaxPayerController } from '@api/app/taxpayer/taxpayer.controller';
import { TaxPayerService } from '@api/app/taxpayer/taxpayer.service';
import { Utils } from '@api/padron/utils';
import { TaxPayer } from '@api/app/taxpayer/taxpayer.model';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule,
        HttpModule,
        TypeOrmModule.forFeature([TaxPayer])
    ],
    controllers: [TaxPayerController],
    providers: [TaxPayerService, ConfigService]
})
export class TaxPayerModule { }