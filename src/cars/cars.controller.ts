import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/car-update.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    const cars: Car[] = this.carsService.findAll();
    return cars;
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    const car: Car = this.carsService.findById(id);
    return car;
  }

  @Post()
  create(@Body() createCardDto: CreateCarDto) {
    const resp = this.carsService.create(createCardDto)
    return resp;
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    const cars = this.carsService.update(id,updateCarDto)
    return cars;
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
   return this.carsService.delete(id)
  }
}
