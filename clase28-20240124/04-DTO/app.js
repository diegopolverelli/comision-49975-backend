import mongoose from "mongoose";
import { Singleton } from "./Singleton.js";
import { UsuarioSaveDTO, UsuariosReadDTO } from "./usuariosDTO.js";



Singleton.conectarDB("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase26")

const usuariosModelo=mongoose.model("usuarios", new mongoose.Schema({
    nombre: String, email: String, password: String
}))

let usuario=await usuariosModelo.findOne({email:"esteban@test.com"})
console.log(usuario)
console.log(new UsuariosReadDTO(usuario))

usuario={
    first_name:"Raul", last_name:"Lopez", email:"rlopez@test.com"
}

let existe=await usuariosModelo.findOne({email:"rlopez@test.com"})
if(!existe){
    let nuevoUsuario=await usuariosModelo.create(new UsuarioSaveDTO(usuario))
    console.log(nuevoUsuario)
}


