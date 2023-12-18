import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    //ValidationPipe : nos permite aplicar reglas de validación a todas las entradas(request) del cliente
    new ValidationPipe({
       whitelist: true,
       forbidNonWhitelisted: true,
      })
  )
  await app.listen(3000);
}
bootstrap();
