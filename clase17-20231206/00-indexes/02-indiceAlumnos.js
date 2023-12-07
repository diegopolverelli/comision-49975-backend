import mongoose from 'mongoose';

let alumnoEsquema=new mongoose.Schema({
    codigo: Number,
    nombre: String, 
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    promedio: Number
  },{collection:'bigAlumnos'})

alumnoEsquema.index({nombre:1})
alumnoEsquema.index({nombre:1, apellido:-1})
alumnoEsquema.index({email: "text"})


let alumnoModelo=mongoose.model('alumnos', alumnoEsquema )


try {
    await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
    console.log(`Conexión a DB establecida`)

    // let resultado=await alumnoModelo.find({nombre:"Morena"}).explain('executionStats')
    // console.log(JSON.stringify(resultado.executionStats, null, 5))

    // let resultado=await alumnoModelo.find({nombre:"Domingo"}).explain('executionStats')
    // console.log(JSON.stringify(resultado.executionStats, null, 5))

    // let resultado=await alumnoModelo.find({nombre:"Morena"}).sort({nombre:1, apellido:1}).explain('executionStats')
    // console.log(JSON.stringify(resultado.executionStats, null, 5))

    let resultado=await alumnoModelo.find({$text: {$search:"hotmail"}}).explain('executionStats')
    console.log(JSON.stringify(resultado.executionStats, null, 5))


} catch (error) {
    console.log(error.message)    
}

process.exit()