import mongoose from "mongoose"

class Singleton{
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

Singleton.conectarDB("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase26")
Singleton.conectarDB("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase26")
Singleton.conectarDB("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase26")
Singleton.conectarDB("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase26")


const modelo=mongoose.model("usuarios", new mongoose.Schema({
    nombre: String, email: String, password: String
}))

console.log(await modelo.find())