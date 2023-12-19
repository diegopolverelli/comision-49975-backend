import mongoose from "mongoose";

const usuariosEsquema=new mongoose.Schema(
    {
        nombre: String,
        email: {
            type: String, unique: true
        },
        password: String
    },
    {
        timestamps: {
            updatedAt: "FechaUltMod", createdAt: "FechaAlta"
        }
    }
)

export const usuariosModelo=mongoose.model("usuarios", usuariosEsquema)