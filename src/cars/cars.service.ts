import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/car-update.dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: '51296bd2-b859-4db8-820d-48b079e9a2dd',
      brand: 'Jeep',
      model: 'Cheroke',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((c) => c.id == id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }
  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    const intialLength = this.cars.length;
    this.cars.push(newCar);
    const afterLength = this.cars.length;
    if (afterLength > intialLength) return this.cars;
    throw new NotFoundException(`No se pudo guardar el objeto`);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);
    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = {...carDB, ...updateCarDto, id}
        return carDB;
      }
      return car;
    });
    return carDB
  }

  delete(id:string){
    let carDB = this.findById(id);
    this.cars = this.cars.filter(car => car.id !== id);
    return this.cars
  }
}
