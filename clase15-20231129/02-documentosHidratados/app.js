import mongoose from 'mongoose'

try {
    await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority',{dbName:'clase15'})
    console.log('DB Online...!!!')
} catch (error) {
    console.log(error)
}

const usuarioModelo=mongoose.model("usuarios",new mongoose.Schema(
    {
        nombre:String, email: {
            type: String, unique:true, required: true
        }
    }
))

// let resultado= await usuarioModelo.insertMany([
//     {nombre:"Diego", email:"diego@test.com"},
//     {nombre:"Laura", email:"laura@test.com"}
// ])
// console.log(resultado)
// let usuarios= await usuarioModelo.find()

let usuario= await usuarioModelo.findOne({nombre:'Diego'}).lean()

let {nombre}=usuario
console.log(nombre)

console.log("de mongo:",usuario)
console.log("con JS:",{_id: '999999999999999', nombre:"Diego", email:"diego@test.com", __v:0})

console.log("de mongo:",Object.keys(usuario))
console.log("con JS:",Object.keys({_id: '999999999999999', nombre:"Diego", email:"diego@test.com", __v:0}))


usuario= await usuarioModelo.findOne({nombre:'Diego'})

// usuario=usuario.toObject()
usuario=usuario.toJSON()

console.log("de mongo:",usuario)
console.log("con JS:",{_id: '999999999999999', nombre:"Diego", email:"diego@test.com", __v:0})

console.log("de mongo:",Object.keys(usuario))
console.log("con JS:",Object.keys({_id: '999999999999999', nombre:"Diego", email:"diego@test.com", __v:0}))