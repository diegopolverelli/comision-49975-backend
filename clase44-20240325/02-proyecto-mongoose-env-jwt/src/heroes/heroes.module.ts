import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Heroe, HeroeSchema } from './schemas/heroe.schema';

@Module({
  controllers: [HeroesController],
  providers: [HeroesService],
  imports:[MongooseModule.forFeature([{ name: Heroe.name, schema: HeroeSchema }])]
})
export class HeroesModule {}
