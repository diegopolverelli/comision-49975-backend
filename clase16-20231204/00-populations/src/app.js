import express from 'express';
import mongoose from 'mongoose';
import { cursosModelo } from './models/cursos.model.js';
import { paisesModelo } from './models/paises.modelo.js';
import { alumnoModelo } from './models/alumno.modelo.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res)=>{

    // let alumno=await alumnoModelo.findOne({_id:'656e6a119185b5275192bf0d'}).populate('cursando.curso').populate('nacionalidad')
    // let alumno=await alumnoModelo.findOne({_id:'656e6a119185b5275192bf0d'}).populate({
    //     path: 'cursando.curso',
    //     // populate: {
    //     //     path: 'institucion'
    //     // }
    // }).populate({
    //     path: 'nacionalidad'
    // })
    let alumno=await alumnoModelo.findOne({_id:'656e6a119185b5275192bf0d'})


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({alumno});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase16')
    console.log('DB Online...!!!')

    // console.log('Genera cursos')
    // await cursosModelo.deleteMany({})
    // let cursos=await cursosModelo.insertMany([
    //     {titulo: "Calculo II", horasPorSemana: 6},
    //     {titulo: "Programacion I", horasPorSemana: 4}
    // ])
    // console.log(cursos)

    // console.log('Genera paises')
    // await paisesModelo.deleteMany({})
    // let paises=await paisesModelo.insertMany([
    //     {codigo:'001', descrip:'Uruguay'},
    //     {codigo:'002', descrip:'Argentina'},
    // ])
    // console.log(paises)
    
    // calII 656e6827d8f041c3c0bdef36
    // progI 656e6827d8f041c3c0bdef37
    // uru 656e6827d8f041c3c0bdef3a

    // let alumno=await alumnoModelo.create(
    //     {
    //         nombre: 'Juan Manuel', 
    //         apellido: 'Rojo',
    //         cursando: [
    //             {
    //                 curso: '656e6827d8f041c3c0bdef36'
    //             },
    //             {
    //                 curso: '656e6827d8f041c3c0bdef37'
    //             },
    //         ],
    //         nacionalidad: '656e6827d8f041c3c0bdef3a'
    //     }
    // )
    // console.log(alumno)

} catch (error) {
    console.log(error.message)    
}
