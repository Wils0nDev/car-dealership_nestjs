import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

//@Module: es un decorador, los decoradores convierten las clases en objetos que tienen cierta
//funcionalidad especifica
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
