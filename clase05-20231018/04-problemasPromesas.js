const suma=(a,b)=>{
    return new Promise((res, rej)=>{
        return res(a+b)
    })
}

const multiplica=(a,b)=>{
    return new Promise((res, rej)=>{
        return res(a*b)
    })
}

multiplica(2,2)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

// 5 x 6 solo con fn suma:
suma(5,5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(res3=>{
                        suma(res3,5)
                            .then(res4=>{
                                suma(res4, 5)
                                    .then(resFinal=>console.log("Promises Hell:",resFinal))
                            })
                    })
            })
    })

suma(5,5)
    .then(res1=>{
        return suma(res1, 5)
    })
    .then(res2=>{
        return suma(res2,5)
    })
    .then(res3=>{
        return suma(res3,5)
    })
    .then(res4=>{
        // throw new Error("error forzado")
        return suma(res4,5)
    })
    .then(resFinal=>console.log("Encadinamiento promesas:", resFinal))
    .catch(err=>console.log(err.message))


// 5 x 4 + 3 x 3 = 29
let resAuxiliar=0
multiplica(5, 4)
    .then(res1=>{
        resAuxiliar=res1
        return multiplica(3, 3)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(resAuxiliar, res2)

    })
    .then(resFinal=>console.log("5 x 4 + 3 x 3 =",resFinal))