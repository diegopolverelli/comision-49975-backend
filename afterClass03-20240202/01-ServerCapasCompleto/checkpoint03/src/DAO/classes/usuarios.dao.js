import { usuariosModelo } from "../models/usuarios.model.js";


export class Usuario{
    constructor(){}

    async get(){
        try {
            return await usuariosModelo.find().lean()
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async getById(id){
        try {
            return await usuariosModelo.findOne({_id:id}).populate('ordenes').lean()
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async create(usuario){
        try {
            return await usuariosModelo.create(usuario)            
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async update(id, usuario){
        try {
            return await usuariosModelo.updateOne({_id:id}, usuario)            
        } catch (error) {
            console.log(error.message)
            return null
        }
    }
}
