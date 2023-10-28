//filter
let numeros=[1,2,3,4,5,6,7,8,9]
let mayores4=numeros.filter(numero=>numero>4)
console.log(mayores4)

let pares=numeros.filter(numero=>numero%2===0)
console.log(pares)

pares=numeros.filter((numero, indice, arrayOrigCompleto)=>{
    console.log(`recorriendo indice ${indice}, con valor ${numero}`)
    return numero%2===0
})
console.table({pares, numeros})
