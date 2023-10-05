
function suma(a, b){
    // proceso...
    // console.log(a+b)

    return a+b
}

// suma="es hacer una adicion entre numeros..."

let resultado=suma(2, 7)
console.log(resultado)


// fn anonima
const suma1=function(a, b){
    // ...
    return a+b
}

// resultado=suma1(2, 7)
// console.log(resultado)

// callbacks

const opera=function(a, b, operacion){
    return operacion(a, b)
}

resultado=opera(3, 3, suma)
console.log(resultado)

resultado=opera(3, 3, suma1)
console.log(resultado)

resultado=opera(3, 3, function(op1, op2){
    return op1*op2
})
console.log(resultado)

// arrow functions
const sumaFlecha=(a, b)=>{
    return a+b
}

console.log(sumaFlecha(4,3))

resultado=opera(3, 3, (op1, op2)=>{
    return op1*op2
})
console.log(resultado)

const sumaFlecha1=(a, b)=>a+b
console.log(sumaFlecha1(4,4))

const cuadrado=a=>a*a
console.log(cuadrado(9))

