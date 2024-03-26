import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';
import { VillanosService } from 'src/villanos/villanos.service';

@Injectable()
export class HeroesService {

  heroes: Hero[]

  constructor(private readonly villanosServie: VillanosService) {
    this.heroes = [
      {
        id: 1,
        name: 'Spider-Man',
        alias: 'Peter Parker',
      },
      {
        id: 2,
        name: 'Superman',
        alias: 'Clark Kent',
      },
    ]

  }

  create(createHeroDto: CreateHeroDto) {
    // return 'This action adds a new hero';

    let { name, alias } = createHeroDto
    if (!name || !alias) throw new BadRequestException(`Complete name / alias`)


    let id = 1
    if (this.heroes.length > 0) {
      id = Math.max(...this.heroes.map(d => d.id)) + 1
    }

    let nuevoHeroe = { id, ...createHeroDto }
    this.heroes.push(nuevoHeroe)
    return nuevoHeroe

  }

  findAll() {
    // return `This action returns all heroes`;
    let villanos=this.villanosServie.findAll()
    console.log(villanos)
    // return this.heroes
    return {
      heroes:this.heroes, villanos
    }
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
