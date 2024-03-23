export const sc01:string="tipado"


console.log(sc01)

let nombre:string="Miguel"
console.log(nombre)

// nombre=100
// console.log(nombre)

let dato01:number | number[] | undefined

dato01=[1,2,3, 500]

type stringOrNumber=string | number

let dato02:stringOrNumber
dato02="jose"
dato02=100

let dato03:stringOrNumber[]

// dato03=["a",1,2,"Juan", false]
dato03=["a",1,2,"Juan"]

type Armamento="Espada" | "Rayos" | "Revolver"

let arma:Armamento="Rayos"

interface UsuariosInterface{
    nombre:string
    apellido:string
}

interface Golpes{
    disparo(direccion:string, arma:Armamento):string
    patada(direccion:string, fuerza:number):string
}

let persona:UsuariosInterface={
    nombre: "",
    apellido: ""
}

class Heroe implements UsuariosInterface, Golpes{
    public readonly nombre: string
    apellido: string
    edad?:number

    constructor(nombre:string, apellido:string){
        this.nombre=nombre
        this.apellido=apellido
    }


    disparo(direccion: string, arma: Armamento): string {
        // throw new Error("Method not implemented.")
        return `${this.nombre} disparó hacia ${direccion} con su ${arma}`
    }
    patada(direccion: string, fuerza: number): string {
        throw new Error("Method not implemented.")
    }

}

let heroe01=new Heroe("Batman", "Bruce Wayne")
console.log(heroe01.disparo("arriba", "Revolver"))

class Villano{
    constructor(
        public name:string,
        public publisher:string
    ){}

    disparo(direccion: string, arma: Armamento): string {
        // throw new Error("Method not implemented.")
        return `${this.name} disparó hacia ${direccion} con su ${arma}`
    }

}

let villano01=new Villano("Thanos", "Marvel")
console.log(villano01.disparo("abajo","Rayos"))