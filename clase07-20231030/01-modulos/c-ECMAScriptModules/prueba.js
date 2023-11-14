// ECMA Script Modules (sintáxis para manejo de módulos, nativa de
// JavaScript, incorporada en la versión ES6, en 2015)

import Persona from "./modulo.js";

import {extraeDirectorio, usuarios, f2, suma} from "./modulo.js"
import { usuarios as users, f2 as resta } from "./modulo.js";
import * as modulo from './modulo.js'
import fs from 'fs'
import {promises as fsPromesas} from 'fs'
import __dirname from "./utils.js";

// fs.promises.writeFile()
// fsPromesas.writeFile()

const persona01 = new Persona("Diego","Ramos")
console.log(persona01.saludo())

console.log(usuarios)
console.log(extraeDirectorio("c:/mis documentos/cv.xls"))

console.log(f2(100,80))
console.log(suma(10,5))

console.log(users)

const persona02=new modulo.default("Romina","Lopez")
console.log(persona02.saludo())

fs.writeFileSync(__dirname+"/archivos/file.txt","Hola...!!! ahora con import / export")

