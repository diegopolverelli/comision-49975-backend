// console.log("Argumentos que vienen por consola:", process.argv)

let argumentos=process.argv.slice(2)
console.log(argumentos)
let indicePuerto=argumentos.findIndex(arg=>arg==="--port")
if(indicePuerto===-1){
    console.log("No se ha ingresado puerto")
}else{
    console.log(`Puerto configurado: ${argumentos[indicePuerto+1]}`)
}

let [ , , ...argumentosOtraForma]=process.argv
console.log(argumentosOtraForma)