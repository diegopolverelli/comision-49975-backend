import mongoose from "mongoose"
import { usuariosModelo } from "./models/usuarios.model.js"

try {
    await mongoose.connect("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase26")
    console.log("DB ONLINE...!!!")
} catch (error) {
    console.log(error.message)
}

export class UsuariosMongoDAO{
    // constructor(){
    //     this.usuarios=[{id:1, nombre:"Lorena", password:"123"}]
    // }

    async get(){
        return usuariosModelo.find()
    }

    async getBy(email){
        return usuario=await usuariosModelo.findOne({email})
    }

    async create(usuario){
        // let id=1
        // if(this.usuarios.length>0){
        //     id=this.usuarios[this.usuarios.length-1].id + 1
        // }

        // usuario.id=id

        // this.usuarios.push(usuario)

        return await usuariosModelo.create(usuario)

    }
}