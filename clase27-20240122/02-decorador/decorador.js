const suma=(a,b)=>a+b


// @Decorador01()
// const suma=(a,b)=>a+b

// @Get()
// class Usuario{

// }

const decoradorAgregaLog=(fn)=>{
    return function(...params){
        console.log(`La función ${fn.name} se ejecutó el ${new Date().toUTCString()}`)
        return fn.apply(this, params)
    }
}

const decoradorDuplica=(fn)=>{
    return function(...params){
        return fn.apply(this, params)*2
    }
}

// console.log((decoradorAgregaLog(suma))(10,4))
// console.log(suma(5,6))

const funcionDecorada=decoradorDuplica(decoradorAgregaLog(suma))
console.log(funcionDecorada(10,10))
