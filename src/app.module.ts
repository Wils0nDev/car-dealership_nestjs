import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

//@Module: es un decorador, los decoradores convierten las clases en objetos que tienen cierta
//funcionalidad especifica
@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
