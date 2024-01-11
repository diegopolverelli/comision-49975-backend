import mongoose from 'mongoose'

const usuariosEsquema=new mongoose.Schema(
    {
        nombre: String,
        email: {
            type: String, unique:true
        },
        password: String,
        rol: {
            type: String, default: "usuario"
        }
    },
    {
        timestamps: true
    }
)

export const usuariosModelo=mongoose.model("usuarios", usuariosEsquema)