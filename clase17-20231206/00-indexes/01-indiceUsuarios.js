import mongoose from 'mongoose';

const usuariosEsquema = new mongoose.Schema({
    first_name: String,
    // first_name: {
    //     type: String,
    //     index: true    
    // }, 
    last_name: String,
    email: String, gender: String, code: Number
}, { collection: 'bigUsers' })

export const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)

try {
    await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
    console.log(`Conexión a DB establecida`)

    // let resultado=await usuariosModelo.find()
    // console.log(resultado)

    // let resultado=await usuariosModelo.find().explain('executionStats')
    // console.log(JSON.stringify(resultado.executionStats, null, 5))

    // let resultado=await usuariosModelo.find({first_name:"Bill"}).explain('executionStats')
    // console.log(JSON.stringify(resultado.executionStats, null, 5))

    // let resultado=await usuariosModelo.findOne({first_name:"Bill"}).explain('executionStats')
    // console.log(JSON.stringify(resultado.executionStats, null, 5))

    let resultado=await usuariosModelo.findOne({first_name:"Marcellina"}).explain('executionStats')
    console.log(JSON.stringify(resultado.executionStats, null, 5))

    
} catch (error) {
    console.log(error.message)    
}

process.exit()
