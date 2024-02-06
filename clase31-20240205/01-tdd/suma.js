// export const suma=(a, b)=>{
//     if(!a || !b){
//         return 0
//     }

//     if(typeof a!=="number" || typeof b!=="number"){
//         return null
//     }

//     return a+b

// }

let numeros=[1,2,3]  
let otrosNumeros=[4,5,6]
let todosLosNumeros=[...numeros, ...otrosNumeros]  // los .. son op. spread
// console.log(todosLosNumeros)

let ob1={prop1:100, prop2:200}
let ob2={prop3:300, prop4:400}
let ob3={
    ...ob1, ...ob2   // los .. son op. spread
}
// console.log(ob3)


// export const suma=(...numeros)=>{   // los .. son op. rest
//     if(numeros.length===0) return 0

//     let error=false
//     for(let i=0; i<numeros.length; i++){
//         if(typeof numeros[i]!=="number"){
//             error=true
//         }
//     }

//     if(error) return null

//     let resultado=0
//     for(let i=0; i<numeros.length; i++){
//         resultado+=numeros[i]
//     }

//     return resultado
    
// }


// export const suma=(...numeros)=>{   // los .. son op. rest
//     if(numeros.length===0) return 0

//     let error=false
//     let resultado=0
//     for(let i=0; i<numeros.length; i++){
//         if(typeof numeros[i]!=="number"){
//             error=true
//         }else{
//             resultado+=numeros[i]
//         }
//     }

//     if(error){
//         return null
//     }else{
//         return resultado
//     }

// }

export const suma=(...numeros)=>{   // los .. son op. rest
    if(numeros.length===0) return 0
    if(!numeros.every(numero=>typeof numero==="number")) return null
    return numeros.reduce((acum, valor)=>acum+=valor,0)
}