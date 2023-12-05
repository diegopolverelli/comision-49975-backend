import mongoose from "mongoose";

export const paisesModelo=mongoose.model('paises', new mongoose.Schema({
    codigo: String,
    descrip: String
}))
