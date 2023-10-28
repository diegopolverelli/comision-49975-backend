let alumno01={
    nombre:'Jimena',
    apellido:'Martinez',
    fechaNacimiento:new Date(1990,2,4),
    email: 'jmartinez@test.com',
    domicilio:'Las Bases 1974, Haedo'
}

console.log(Object.keys(alumno01))
console.log(Object.values(alumno01))
console.log(Object.entries(alumno01))



let numeros=[1,2,3,4]
console.log(Array.isArray('Juan'))
console.log(Array.isArray(numeros))




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

let propsFactura=Object.keys(factura)
propsFactura.forEach(prop=>{
    console.log(prop)
})



