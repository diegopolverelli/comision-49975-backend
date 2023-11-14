
let numeros=[1,2,3,4,5]
let dobles=numeros.map(numero=>numero*2)

console.table({numeros, dobles})

// let otroResultado=[]

const miMap=(arreglo=[], callback)=>{
    if(!Array.isArray(arreglo)){
        console.log('Ingrese un arreglo como argumento')
        return
    }

    let resultado=[]
    arreglo.forEach(elemento=>{
        resultado.push(callback(elemento))
        // otroResultado.push(callback(elemento))

    })

    return resultado

}


dobles=miMap(numeros, numero=>numero*2)
console.table({numeros, dobles})
// console.log(otroResultado)

const opera=(a, b, callback)=>{
    if(typeof a!=='number' || typeof b!=='number'){
        // return new Error('Solo se aceptan args numericos')
        let error= new Error('Solo se aceptan args numericos')
        return callback(error)
    }
    return callback(null, a, b)
}

console.log(opera(5,4,(error, b, c)=>{
    if(error){
        console.log(error.message)
        process.exit()
    }else{
        return b+c
    }                
}))

console.log(opera(5,3,(error, b, c)=>{
    return b+c
}))

console.log(opera(5,'juan',(error, b, c)=>{
    if(error){
        console.log(error.message)
        process.exit()
    }else{
        return b+c
    }
}))

