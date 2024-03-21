import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService, Heroe } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string | number {

    return this.appService.getHello();
    // return 0
  }

  @Get(":id")
  getHeroeById(@Param("id", ParseIntPipe) idRecibido:number, @Query("color") color:string ): Heroe {

    let numero=this.appService.getNumero()
    console.log(numero, typeof numero)

    console.log(idRecibido)
    console.log(color)
    // return this.appService.getHello();
    return this.appService.getHeroeById(+idRecibido)
    // return 100
  }

  @Post()
  cambiaDatos(@Body() datos:any):string{
    console.log(datos)
    return "Datos recibidos...!!!"
  }
}

// export class AppController {
//   constructor( appService) {}

//   getHello() {
//     return this.appService.getHello();
//   }
// }
