
export class HeroesGetDTO{
    constructor(heroe){
        this.codigo=heroe.id
        this.nombre=heroe.name
        this.identidad=heroe.alias
        this.equipo=heroe.team
        this.publicadoPor=heroe.publisher
    }
}