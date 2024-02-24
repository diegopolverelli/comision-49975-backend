import mongoose from "mongoose";

export const usuarioModelo=mongoose.model(
    "usuarios",
    new mongoose.Schema(
        {
            email:{type: String, unique: true},
            nombre: String, 
            password: String, 
            carrito_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "carritos"
            }
        },
        {timestamps:true}
    )
)