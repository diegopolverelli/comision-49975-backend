
class Contador{
    static cantidadContadores=0
    static sumaTodosLosContadores=0

    constructor(nombre){
        this.responsable=nombre
        this.contador=0
        Contador.cantidadContadores++
    }

    static verCantidadContadores(){
        return Contador.cantidadContadores
    }

    static verTotalContadores(){
        return Contador.sumaTodosLosContadores
    }

    incrementarContador(){
        this.contador++
        Contador.sumaTodosLosContadores++
    }

    verContador(){
        return this.contador
    }

    verResponsable(){
        return this.responsable
    }
}

let cont01=new Contador('Lautaro')
let cont02=new Contador('Maria')

cont01.incrementarContador()
cont01.incrementarContador()
cont01.incrementarContador()

cont02.incrementarContador()

console.log(`El responsable del cont01 es ${cont01.verResponsable()}, y el valor es de ${cont01.verContador()}`)
console.log(`El responsable del cont02 es ${cont02.verResponsable()}, y el valor es de ${cont02.verContador()}`)

console.log(`Cantidad total de contadores: ${Contador.verCantidadContadores()}; todos suman en total: ${Contador.verTotalContadores()}`)