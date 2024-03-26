import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Model } from 'mongoose';
import { Heroe } from './schemas/heroe.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HeroesService {

  constructor(@InjectModel(Heroe.name) private readonly heroesModelo:Model<Heroe>){}

  async create(createHeroDto: CreateHeroDto) {
    let heroes=await this.heroesModelo.findOne({name:createHeroDto.name})
    // return 'This action adds a new hero';
    return this.heroesModelo.create(createHeroDto)
  }

  findAll() {
    // return `This action returns all heroes`;
    return this.heroesModelo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
