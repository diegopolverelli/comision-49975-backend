import mongoose from "mongoose";

export const ordenesModelo=mongoose.model(
    "ordenes",
    new mongoose.Schema(
        {
            numero: Number,
            negocio: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "negocios"
            },
            usuario: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "usuarios"
            },
            producto:[],
            total: Number
        }, {timestamps:true}
    )

)