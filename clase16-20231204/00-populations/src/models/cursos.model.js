import mongoose from "mongoose";

export const cursosModelo=mongoose.model('cursos', new mongoose.Schema({
    titulo: String,
    horasPorSemana: Number
}))

