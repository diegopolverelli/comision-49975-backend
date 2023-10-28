//every
let numeros=Array(10,20,30,40,50)

let resultado=numeros.every(numero=>numero>30)
console.log(resultado)
resultado=numeros.every(numero=>numero>5)
console.log(resultado)
resultado=numeros.every(numero=>numero%2===0)
console.log(resultado)

resultado=numeros.every((numero, indice)=>{
    console.log(`recorriendo indice ${indice}, con valor ${numero}`)
    return numero%2===0
})
console.log(resultado)

