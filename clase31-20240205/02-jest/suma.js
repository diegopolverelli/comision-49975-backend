const suma=(...numeros)=>{   // los .. son op. rest
    if(numeros.length===0) return 0
    if(!numeros.every(numero=>typeof numero==="number")) return null
    return numeros.reduce((acum, valor)=>acum+=valor,0)
}

module.exports={suma}