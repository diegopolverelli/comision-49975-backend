// CommonJS (sintáxis para manejo de módulos, nativa de Node)

// const Persona=require('./modulo') // *
// const persona01=new Persona("Diego","Ramos")
// console.log(persona01.saludo())

const modulo=require('./modulo')
const fs=require('fs')
const users=require('./modulo').usuarios
const fsPromesas=require('fs').promises

console.log(modulo.usuarios)
let persona02=new modulo.Persona("Romina","Lopez")
console.log(persona02.nombreCompleto)

console.log(users)

// fs.promises.writeFile()
// fsPromesas.writeFile()

fs.writeFileSync(__dirname+"/archivos/file.txt","Hola...!!!")
console.log("__dirname: ",__dirname)
console.log("__filename: ",__filename)
