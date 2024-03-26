import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { VillanosModule } from './villanos/villanos.module';

@Module({
  imports: [HeroesModule, VillanosModule], 
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){

  }
}

