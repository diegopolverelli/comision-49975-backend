import { ordenesModelo } from "../models/ordenes.model.js";

export class Orden{
    constructor(){}

    async get(){
        try {
            return await ordenesModelo.find()
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async getById(id){
        try {
            return await ordenesModelo.findOne({_id:id})
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async create(orden){
        try {
            return await ordenesModelo.create(orden)
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async update(id, orden){
        try {
            return await ordenesModelo.updateOne({_id:id} ,orden)
        } catch (error) {
            console.log(error.message)
            return null
        }
    }
}