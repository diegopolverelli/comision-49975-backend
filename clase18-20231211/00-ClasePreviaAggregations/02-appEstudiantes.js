import express from 'express';
import mongoose from "mongoose";

const app=express();

const server=app.listen(3000,()=>{
    console.log('Server escuchando el puerdo 3000...!!!')
});

const estudiantesCol = 'estudiantes'

const estudiantesEsquema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String,
})

const estudiantesModelo = mongoose.model(estudiantesCol, estudiantesEsquema);

app.get('/',async(req,res)=>{
    let resultado=await estudiantesModelo.find();
    
    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})

app.get('/1',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate(
        [
            {
                $group:{
                    _id: "$grade",
                    nota: {
                        $min: "$grade"
                    },
                    // detalle:{
                    //     $push: "$$ROOT"
                    // },
                    detalle2:{
                        $push: {
                            nombre: "$first_name",
                            apellido: "$last_name",
                            nombreCompleto: {
                                $concat:["$first_name", " ", "$last_name"]
                            },
                            curso: "$group"
                        }
                    }
                }
            },
            {
                $sort: { nota: -1}
            }
        ]
    );
    
    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})


app.get('/3',async(req,res)=>{
    let resultado=await estudiantesModelo.aggregate(
        [
            {
                $match: {
                    group: "1B"
                }
            },
            {
                $group: {
                    _id: "$group",
                    notaPromedio: {
                        $avg: "$grade"
                    },
                    detalle:{
                        $push: {
                            nombreCompleto: {
                                $concat:["$first_name", " ", "$last_name"]
                            },
                            nota: "$grade"
                        }
                    }
                }
            }
        ]
    );
    
    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})


const env=async()=>{
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
        console.log(`Conexión a DB establecida`);

    } catch (error) {
        console.log(`Error en la app: ${error.message}`);
    }
}

env()
