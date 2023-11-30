import mongoose from "mongoose";

const usuariosColeccion='usuarios'
const usuariosEsquema=new mongoose.Schema(
    {
        nombre: String, 
        apellido: String,
        email: {
           type: String, unique:true, required: true 
        }, 
        edad: Number, 
        deleted: {
            type: Boolean, default: false 
        }
    },
    {
        timestamps: true,
        // collection: 'bigUsers',
        strict: false
    }
)

export const usuariosModelo=mongoose.model(usuariosColeccion, usuariosEsquema)