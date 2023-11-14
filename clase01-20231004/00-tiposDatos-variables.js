console.log(10, typeof 10)
console.log(10n, typeof 10n)
console.log('nombre', typeof 'nombre')
console.log(false, typeof false)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

let numero1=Number.MAX_SAFE_INTEGER+100
console.log(numero1)

let nombre='Luis'
console.log(nombre)
let nombre2=nombre
nombre2='Diego'
console.log(nombre, nombre2)
console.log('juan'+2)
console.log(['juan']*4)
console.log(['juan','Diego']+4)

let arreglo=[1,2,3,4]
let arreglo2=arreglo

arreglo2.push(100)
console.table({arreglo, arreglo2})

