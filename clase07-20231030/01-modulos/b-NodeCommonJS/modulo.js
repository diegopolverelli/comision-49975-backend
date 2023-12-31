// CommonJS (sintáxis para manejo de módulos, nativa de Node)
const path=require('path')

class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre,
        this.apellido=apellido
    }

    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    saludo(){
        return `${this.nombre} ${this.apellido} dice: Hola. ¿cómo están?`
    }
}

const extraeDirectorio=(rutaArchivo)=>{
    return path.dirname(rutaArchivo)
}

const usuarios=[
    {
        id:1,
        nombre:'Raul'
    },
    {
        id:2,
        nombre:'Vanesa'
    },
    {
        id:3,
        nombre:'Carlos'
    },
]

const f1=(a,b)=>{
    return a+b;
}

const f2=(a,b)=>{
    return a-b;
}

// module.exports=Persona // *

module.exports={
    Persona, f1, f2, usuarios, extraeDirectorio
}

