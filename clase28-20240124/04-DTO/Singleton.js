import mongoose from "mongoose"

export class Singleton{
    static #instancia
    constructor(url){
        mongoose.connect(url)
    }

    static conectarDB(url){
        if(this.#instancia){
            console.log(`La conexión ya fue establecida con anterioridad...!!!`)
            return this.#instancia
        }
        this.#instancia=new Singleton(url)
        console.log(`DB Online...!!!`)
        return this.#instancia

    }
}

