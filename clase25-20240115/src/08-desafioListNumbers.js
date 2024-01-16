process.on("exit",code=>{
    switch (code) {

        case -3:
            console.log("No se han ingresado argumentos en la funcion")
            break;
        case -4:
            console.log("Argumentos invalidos detectados...!!! Solo se adminten arg. numéricos")
            break;
    
        default:
            console.log("Script finalizado de manera correcta...!!!")
            break;
    }
})

const listNumbers=(...numeros)=>{
    if(numeros.length===0){
        process.exit(-3)
    }

    numeros.forEach(n=>{
        if(isNaN(n)){
            let error=numeros.map(n=>typeof n)
            console.log(`Argumentos invalidos: ${JSON.stringify(error)}`)
            process.exit(-4)
        }
    })

    console.log(numeros)
}

// listNumbers(1,2,3)
// listNumbers()
listNumbers(1,2,3, "Juan", false)