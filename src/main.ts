import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    //ValidationPipe : nos permite aplicar reglas de validación a todas las entradas(request) del cliente
    //trabaja en conjunto con class-validator y el class-transformer
    new ValidationPipe({
       whitelist: true, //Remueve las propiedades que no pertenecen al modelo
       forbidNonWhitelisted: true, //hace que se respeto el modelo de la request
      })
  )
  await app.listen(3000);
}
bootstrap();
