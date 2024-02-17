import {fakerES_MX as faker} from '@faker-js/faker'

export const generaProducto=()=>{
    let codigo=faker.string.alphanumeric(2)+faker.string.numeric({length:6, allowLeadingZeros:true})
    let descrip=faker.commerce.productName()
    let precio=faker.number.float({min:800, max:8300, fractionDigits: 2})
    let stock=faker.number.int({min:10, max:100 })

    return {
        codigo, descrip, precio, stock
    }
}