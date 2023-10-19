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

// 5 x 4 + 3 x 3 = 29

const entorno=async()=>{
    let res1=await multiplica(5,4)
    let res2=await multiplica(3,3)
    let resFinal=await suma(res1, res2)

    console.log(resFinal)
}

entorno()

async function entorno2(){
    let res1=await multiplica(5,4)
    let res2=await multiplica(3,3)
    let resFinal=await suma(res1, res2)

    console.log(resFinal)
}

entorno2()

const entorno3=async function(){
    try {
        let res1=await multiplica(5,4)
        let res2=await multiplica(3,3)
        let resFinal=await suma(res1, res2)
    
        console.log("log desde dentro de entorno3():",resFinal)
        return resFinal
    } catch (error) {
        console.log("Paso algo... :(", error.message)
    }
}

entorno3()
    .then(res=>console.log("log desde fuera de entorno3():", res))