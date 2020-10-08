/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true
    });
    const config: ConfigService = app.get(ConfigService);
    const port = config.get<number>('API_PORT');
    const globalPrefix = config.get<string>('API_GLOBAL_PREFIX');

    app.enableCors();
    app.setGlobalPrefix(globalPrefix);
    await app.listen(port, () => {
        Logger.log(`API Escuchando en http://localhost:${port}/${globalPrefix}`, 'HTTP');
		Logger.log('Presione Ctrl + C para salir.', 'HTTP');
    });
}

bootstrap();
