import mongoose from "mongoose";

export const carritoModelo=mongoose.model(
    "carritos",
    new mongoose.Schema(
        {
            productos:[
                {
                    producto: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "productos"
                    }, 
                    cantidad: Number
                }
            ]
        },
        {timestamps:true}
    )
)