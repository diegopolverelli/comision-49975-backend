import { suma } from "./suma.js";
import colors from 'colors'

// let prueba="juan"
// console.log(prueba.blue.bold)

let contadorPruebas=0
let pruebasCorrectas=0
let esperado
let resultado

console.log("Pruebas función suma:")

contadorPruebas++
console.log(`Si algun argumento es no numérico, debe devolver null`)
resultado=suma(5, "Juan")
esperado=null
if(esperado===resultado){
    console.log(`${"√".green} - Prueba ${contadorPruebas} correcta...!!!`)
    pruebasCorrectas++
}else{
    console.log(`Prueba fallida...!!!`+` Se esperaba ${esperado}`.green+", "+`se obtuvo ${resultado}`.red)
}
console.log("\n")

contadorPruebas++
console.log(`Si no se ingresan argumentos, la fn debe retornar 0`)
resultado=suma()
esperado=0
if(esperado===resultado){
    console.log(`${"√".green} - Prueba ${contadorPruebas} correcta...!!!`)
    pruebasCorrectas++
}else{
    console.log(`Prueba fallida...!!!`+` Se esperaba ${esperado}`.green+", "+`se obtuvo ${resultado}`.red)
}
console.log("\n")

contadorPruebas++
console.log(`Dados 2 argumentos numéricos, debe retornar la suma de ambos`)
resultado=suma(3, 4)
esperado=7
if(esperado===resultado){
    console.log(`${"√".green} - Prueba ${contadorPruebas} correcta...!!!`)
    pruebasCorrectas++
}else{
    console.log(`Prueba fallida...!!!`+` Se esperaba ${esperado}`.green+", "+`se obtuvo ${resultado}`.red)
}
console.log("\n")

contadorPruebas++
console.log(`Si envío n argumentos numéricos, la fn retorna la suma de todos ellos`)
resultado=suma(1,2,3,4,5)
esperado=15
if(esperado===resultado){
    console.log(`${"√".green} - Prueba ${contadorPruebas} correcta...!!!`)
    pruebasCorrectas++
}else{
    console.log(`Prueba fallida...!!!`+` Se esperaba ${esperado}`.green+", "+`se obtuvo ${resultado}`.red)
}
console.log("\n")


console.log("Informe pruebas:")
console.log(`Pruebas realizadas: ${contadorPruebas}`)
console.log(`Pruebas superadas: ${pruebasCorrectas} `.green+" - "+`Pruebas fallidas ${contadorPruebas-pruebasCorrectas}`.red)


