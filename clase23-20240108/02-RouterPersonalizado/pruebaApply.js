let persona01={
    nombre:"Juan",
    imprime(saludo){
        console.log(saludo, this.nombre)
    }
}

persona01.imprime("Hello...!!!")

let persona02={
    nombre:"Micaela"
}

persona01.imprime.apply(persona02, ["Buenas noches"])

persona01.imprime.call(persona02, "Holis...")