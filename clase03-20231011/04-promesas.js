
const dividir = (a, b) => {
    return new Promise((resolve, reject) => {    // res, rej
        if (b === 0) {
            return reject(new Error('no se puede dividir por 0...'))
        } else {
            return resolve(a / b)
        }
    })
}

console.log(dividir(10, 5))
console.log(dividir(10, 5) + 100)
console.log(dividir(10, 5) * 10)

dividir(10, 5)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error.message))
    .finally(() => {
        console.log('se ejecuta siempre; si se rechaza o si se cumple la promesa')
    })

dividir(10, 5)
    .then(resultado => console.log(resultado * 10))
    .catch(error => console.log(error.message))
    .finally(() => {
        console.log('se ejecuta siempre; si se rechaza o si se cumple la promesa')
    })


dividir(10, 0)
    .then(resultado => console.log(resultado * 10))
    .catch(error => console.log(error.message))
    .finally(() => {
        console.log('se ejecuta siempre; si se rechaza o si se cumple la promesa')
    })

// fetch()

dividir(10, 5)
    .then(resultado => {

        let suma=resultado + 44
        // codigo...

        console.log(resultado)


    })
    .catch(error => console.log(error.message))
    .finally(() => {
        console.log('se ejecuta siempre; si se rechaza o si se cumple la promesa')
    })