import mongoose from "mongoose";

const alumnoEsquema=new mongoose.Schema({
    nombre: String, apellido: String,
    cursando: {
        type: [
            {
                curso: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'cursos'
                }
            }
        ]
    },
    nacionalidad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'paises'
    }
})

alumnoEsquema.pre("findOne", function(){
    this.populate({
        path: 'cursando.curso',
        // populate: {
        //     path: 'institucion'
        // }
    }).populate({
        path: 'nacionalidad'
    }).lean().projection({_id:0})
})


alumnoEsquema.pre("find", function(){
    this.populate({
        path: 'cursando.curso',
        // populate: {
        //     path: 'institucion'
        // }
    }).populate({
        path: 'nacionalidad'
    }).lean()

    // this.lean()
})

export const alumnoModelo=mongoose.model("alumnos", alumnoEsquema)