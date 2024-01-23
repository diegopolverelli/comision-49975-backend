class Clima{
    static #consultas=0

    getClima(ciudad){
        if(Clima.#consultas>=3){
            console.log("Se han agotado las consultad diarias. Consulte mañana...!!!")
            return null
        }

        Clima.#consultas++
        let temperatura=Math.random()*6+27
        return temperatura.toFixed(2)
    }
}

class Proxy{
    constructor(claseClima){
        this.clima=new claseClima()
        this.cache={}
    }

    getClima(ciudad){
        if(this.cache[ciudad]){
            return this.cache[ciudad]
        }
        let temp=this.clima.getClima(ciudad)
        this.cache[ciudad]=temp
        return this.cache[ciudad]
    }

}


// const clima=new Clima()
const clima=new Proxy(Clima)

let ciudad="Moron"
let temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
ciudad="Parana"
temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
ciudad="Cutralcó"
temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
ciudad="Moron"
temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
ciudad="Moron"
temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
ciudad="Parana"
temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
ciudad="Bariloche"
temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
ciudad="Moron"
temp=clima.getClima(ciudad)
if(temp){
    console.log(`El clima en ${ciudad} es de ${temp}°`)
}
