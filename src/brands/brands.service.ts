import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { SeedService } from '../seed/seed.service';

@Injectable()
export class BrandsService {
  constructor(
  ){}
  private brands : Brand [] =[]
  create(createBrandDto: CreateBrandDto) {
    
    const {name} = createBrandDto;
    const brand : Brand = {
      id:uuid(),
      name: createBrandDto.name,
      createdAt : new Date().getTime()
    }
    this.brands.push(brand)
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {

    const brand = this.brands.find(brand => brand.id === id);
    if(!brand) throw new NotFoundException(`Brand with id ${id} not found`)

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB = {...brandDB, ...updateBrandDto, id}
        return brandDB;
      }
      return brand;
    });
    return brandDB
  }

  remove(id: string) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
    return this.brands
  }

  fillCarsWithSeedData(brands:Brand[]){
    this.brands= brands
  }
}
