import { productoModelo } from "./models/producto.modelo.js"

export class ProductosDAO{

    async get(){
        try {
            return await productoModelo.find().lean()
        } catch (error) {
            console.log(error.message)
            return null
            // res.setHeader('Content-Type','application/json');
            // return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
        }
    }

}