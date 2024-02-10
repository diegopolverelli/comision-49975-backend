import mongoose from "mongoose";

export const productoModelo=mongoose.model(
    "productos",
    new mongoose.Schema(
        {
            codigo:{type: String, unique: true},
            descrip: String, 
            precio: Number, 
            stock: Number
        },
        {timestamps:true}
    )
)