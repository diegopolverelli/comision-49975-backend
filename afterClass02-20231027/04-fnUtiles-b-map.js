//map
let numeros=[1,2,3,4,5,6,7,8,9]

let cuadrados=numeros.map(numero=>{
    return numero*numero
})

console.log(cuadrados)
console.table({numeros, cuadrados})


let nombres=['Martina', 'Mariela', 'Sandra', 'Ana', 'Jimena', 'Marcelo', 'Julian', 'Ernesto']
let mayus=nombres.map(nombre=>nombre.toUpperCase())
console.log(mayus)

mayus=nombres.map(nombre=>Math.random())
console.log(mayus)

