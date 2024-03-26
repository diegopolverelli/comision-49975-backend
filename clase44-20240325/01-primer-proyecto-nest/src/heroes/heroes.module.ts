import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { VillanosModule } from 'src/villanos/villanos.module';

@Module({
  imports:[VillanosModule],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
