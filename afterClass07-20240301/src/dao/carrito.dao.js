import { CustomError, TIPOS_ERROR } from "../utils/errores.js";
import { carritoModelo } from "./models/carrito.model.js";

export class CarritoDAO{

    async create(){
        try {
            return await carritoModelo.create({productos:[]})
        } catch (error) {
            console.log(error.message)
            return null
        }
    }


    async getById(id){
        try {
            return await carritoModelo.findOne({_id:id}).populate("productos.producto").lean()
        } catch (error) {
            // console.log(error.message)
            // return null
            throw new CustomError("Error en CarritoDAO", error.message, error.codigo?error.codigo:TIPOS_ERROR.DB, error.desc
            ?error.descrip:"Error inesperado, contacte al administrador")
        }
    }

    async update(id, carrito){
        try {
            return await carritoModelo.updateOne({_id:id}, carrito)
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    async deleteAll(){
        try {
            return await carritoModelo.deleteMany({})
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

}