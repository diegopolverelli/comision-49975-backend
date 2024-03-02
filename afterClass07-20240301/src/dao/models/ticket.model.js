import mongoose from "mongoose";

export const ticketModelo=mongoose.model(
    "tickets",
    new mongoose.Schema(
        {
            codigo:{type: String, unique: true},
            fecha: Date,
            email: String, 
            importe: Number, 
            detalle: []
        },
        {timestamps:true}
    )
)