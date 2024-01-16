process.on("exit", (code)=>{
    console.log("El script ha terminado...!!!", code)
})

process.on("uncaughtException", (error)=>{
    console.log(`Error inesperado. Detalle: ${error.message}. Contacte al administrador`)
})

let numero=0    
setInterval(() => {
    numero++
    console.log(numero)
    if(numero===8){
        process.exit(-4)
    }
}, 1000);

setTimeout(() => {
    let nombre=undefined
    console.log(nombre.toLowerCase())
}, 3000);

setTimeout(() => {
    throw new Error("Error de prueba...")
}, 6000);