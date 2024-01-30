import mongoose from 'mongoose'

export const usuariosModelo=mongoose.model(
    "usuarios",
    new mongoose.Schema(
        {
            nombre: String,
            email: String, 
            pedidos: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "ordenes"
                }
            ]
        },{timestamps:true}
    )
)