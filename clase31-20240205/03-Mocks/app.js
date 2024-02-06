import {fakerES_MX as faker} from '@faker-js/faker'

// console.log(faker.animal.bird())
// console.log(faker.color.human())
// console.log(faker.commerce.price({ min: 100, max: 200, dec: 2, symbol: '$' }))
// console.log(faker.commerce.product())
// let nombre=faker.person.firstName("female")
// let apellido=faker.person.lastName()
// let email=faker.internet.email({firstName:nombre, lastName:apellido})

// console.log(nombre, apellido, email)

const generaUsuario=()=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let email=faker.internet.email({firstName:nombre, lastName:apellido})
    let password=faker.internet.password({ length: 8, memorable: true })  
    let domicilio={
        pais:faker.location.country(),
        ciudad:faker.location.city(),
        direccion:faker.location.streetAddress({ useFullAddress: true })
    }
    let dni=faker.string.numeric({ length: 2, allowLeadingZeros: false })+"."+faker.string.numeric({ length: 3, allowLeadingZeros: true })+"."+faker.string.numeric({ length: 3, allowLeadingZeros: true })
    return {
        nombre, apellido, email, password, domicilio, dni
    }
}

const generaProducto=()=>{
    let codigo=faker.string.alphanumeric(5)
    let descrip=faker.commerce.product()
    let precio=faker.commerce.price({ min: 100, max: 200, dec: 2, symbol: '$' })
    let cantidad=faker.number.int({min:1, max:20})
    let subtotal=cantidad*Number(precio.slice(1))
    return {
        codigo, descrip, precio, cantidad, subtotal
    }
}

const generaCompra=()=>{
    let nroTicket="00"+faker.string.numeric(2)+"-0000"+faker.string.numeric({length:4, allowLeadingZeros:true})
    let fecha=faker.date.recent({days:30})
    let cliente=generaUsuario()
    let carrito=[]
    let total=0
    for(let i=0; i<faker.number.int({min:1, max:15}); i++){
        let producto=generaProducto()
        total+=producto.subtotal
        carrito.push(producto)
    }

    return {
        nroTicket, fecha, cliente, carrito, total
    }
}

// console.log(generaUsuario())
// console.log(generaProducto())
// console.log(`${194*15}`)
console.log(generaCompra())