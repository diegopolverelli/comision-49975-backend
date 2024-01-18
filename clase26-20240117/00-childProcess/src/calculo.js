
process.on("message", mensaje=>{

    let script=process.argv[1].split("\\")
    script=script[script.length-1]
    console.log(`Soy el script ${script} con pid ${process.pid}, y acabo de recibir el siguiente mensaje: "${mensaje}"`)

    console.log("inicio calculo")
    console.time("Demora en el calculo:")

    let numero=0

    for(let i=0; i<15_000_000_000; i++){
        numero++
    }

    console.log("fin calculo")
    console.timeEnd("Demora en el calculo:")

    // return numero
    process.send(numero)
})