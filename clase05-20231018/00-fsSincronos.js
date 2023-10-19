const fs = require('fs')

const archivo="./archivos/archivo.txt"

let texto1=`La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`


console.log("Inicio de programa")

fs.writeFileSync(archivo, texto1)

let lectura=fs.readFileSync(archivo, "utf-8")
console.log(lectura)

fs.appendFileSync(archivo, "\n\nEditorial Planeta")

lectura=fs.readFileSync(archivo, "utf-8")
console.log(lectura)

setTimeout(()=>{
    fs.unlinkSync(archivo)
},2000)

console.log("Fin de programa")