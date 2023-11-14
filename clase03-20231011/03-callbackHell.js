const opera=(a, b, callback)=>{
    if(typeof a!=='number' || typeof b!=='number'){
        // return new Error('Solo se aceptan args numericos')
        let error= new Error('Solo se aceptan args numericos')
        return callback(error)
    }
    return callback(null, a, b)
}

// (3x3 + 5x5) / 10 + 100 =103,4

let resultado=opera(100, 0, (err, a, b)=>{
    return opera(10, 0, (err, a, b)=>{
        return opera(5, 5, (err, a, b)=>{
            return opera(3, 3, (err, a, b)=>{
                return a*b
            }) + a*b
        }) /a 
    }) + a
})

console.log(resultado)
