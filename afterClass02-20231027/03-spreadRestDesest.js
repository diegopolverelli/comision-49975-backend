// operador Spread:
let defensa={
    primerCentral:'Romero',
    lateralIzquierdo:'Montiel',
    lateralDerecho:'Tagliafico',
    segundoCentral:'Otamendi'
}

let medio={
    nro5:'Paredes',
    nro8:'DePaul',
    nro7:'DiMaria',
    nro14:'Enzo'
}

let ataque={
    el10:'Lio',
    el9:'Julian',
}

// updateProduct(id, {titulo:"lo que sea", precio:100, id=9999})
// updateProduct(id, titulo, precio, codigo, pr2, pr4)

const equipo={
    arquero:"Martinez",
    // lateralDerecho:defensa.lateralDerecho,
    // lateralIzquierdo:defensa.lateralIzquierdo
    ...defensa, 
    ...medio, 
    ...ataque,
    lateralDerecho:"Acuña"
}


console.log(equipo)

let numeros=[1,2,3,4, "jose"]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros, ...numeros2] 
console.log(todosLosNumeros)







// operador Rest: ...
// const suma=(a,b,c)=>{
//     console.log(a+b+c)
// }

// suma(3,4,11)
// suma(3,4)

const sumaVarios=(a, b, ...otros)=>{
    // console.log({a, b, otros})
    let resultado=a+b
    otros.forEach(numero=>{
        resultado+=numero
    })
    console.log(resultado)
}

sumaVarios(2,2)
sumaVarios(2,2,3,4)
sumaVarios()
sumaVarios(1,2,3,4,5,6,7,8,9,10)

const sumaVariosOK=(...otros)=>{ // acá los ... significan operador Rest
    // console.log({a, b, otros})
    let resultado=0
    otros.forEach(numero=>{
        resultado+=numero
    })
    console.log(resultado)
}

sumaVariosOK()
sumaVariosOK(10,20,30,40)

let sumandos=[10,20,30,40,50,60]
sumaVariosOK(...sumandos) // acá los ... significan operador Spread


// desestructuracion:
let heroes1=["Batman", "Robin", "Hulk"]
// let heroe1=heroes1[0]
// let heroe2=heroes1[1]
// let heroe3=heroes1[2]

let [heroe1, heroe2, heroe3]=heroes1
let [per1,,per2]=heroes1

// console.log(heroe1, heroe2, heroe3)
console.log(per1, per2)

let [,h1]=heroes1
console.log(h1)

let spider={
    id: 1,
    name: "Spider-Man",
    alias: "Peter Parker",
    powers: ["Wall-crawling", "Web-shooting", "Superhuman strength"],
    team: "Avengers",
    publisher: "Marvel"
}

// let id=spider.id
// let alias=spider.alias

let {id, alias, powers, enemigos, publisher}=spider

console.log(id, alias, powers, enemigos, publisher)

let name='Juan'
let {id:otroId, name:name2}=spider
console.log(otroId, name2)
let {team, ...variosProps}=spider // los ... son en este marco, el operador rest
console.log({team, variosProps})


const varios=()=>{
    let pi=3.14
    let numerosPrimos=[2,3,5,7,11,13,17,19,23]
    function suma(a,b){
        console.log(a+b)
    }
    return {
        pi,
        numerosPrimos,
        suma,
    }
}

let funciones=varios()
console.log(funciones.numerosPrimos)

let {pi, numerosPrimos, suma}=varios()
console.log(pi)
console.log(numerosPrimos)
suma(9,10)



let heroes=["Superman", "Hulk", "Black-Widow", "Mujer Maravilla", "Batman"]