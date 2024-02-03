import { negociosModelo } from "../models/negocios.model.js";


export class Negocio{
    constructor(){}

    async get(){
        try {
            return await negociosModelo.find()
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async getById(id){
        try {
            return await negociosModelo.findOne({_id:id})
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async create(negocio){
        try {
            return await negociosModelo.create(negocio)
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async update(id, negocio){
        try {
            return await negociosModelo.updateOne({_id:id} ,negocio)
        } catch (error) {
            console.log(error.message)
            return null
        }
    }
}