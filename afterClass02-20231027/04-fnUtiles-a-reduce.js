//reduce
let numeros=Array(10,20,30,40,50)
let resultado=numeros.reduce((acum, numero)=>acum+numero,1000)
console.log(resultado)
resultado=numeros.reduce((acum, numero, indice, arrayOriginal)=>{
    console.log(`Recorriendo elemento ${indice}. Tiene valor = a ${numero}. Mi acum es = a ${acum}`)
    console.log("el array original es:", arrayOriginal)
    return acum+numero
},0)


numeros=Array(1,1,1,1,1)
resultado=numeros.reduce((acum, numero)=>acum+3*numero, 0)
console.log(resultado)

resultado=numeros.reduce((acum, numero)=>{
    return acum+numero
},1000)
console.log(resultado)



let factura={
    numero:107998,
    codigoCliente:'A005',
    fecha: new Date(2023,0,10),
    idTributario:'30333333331',
    subtotal:10000,
    impuestos:{
        tasasGenerales:1.2,
        iibb:2.4,
        iva:21,
        otros:0.5
    }
}

let {subtotal, impuestos}=factura
let valoresImpuestos=Object.values(impuestos)
console.log(valoresImpuestos)
console.log(subtotal)
let total=valoresImpuestos.reduce((acum, impuesto)=>{
    return acum+subtotal*impuesto/100
}, subtotal)
console.log(total)





