
(function suma(a, b){
    console.log(a + b)
})(5, 5);

// suma(5,5)

let resultado=(function suma(a, b){
    return a+b
})(5, 5);
console.log(resultado)

// let contador=0
// contador++;
// contador=1000
// console.log(contador)

const contador=(function(){
    let contador=0

    function incrementa(){
        contador++
    }

    function decrementa(){
        contador--
    }

    function verContador(){
        return contador
    }

    return {incrementa, decrementa, verContador}    

})()

contador.incrementa()
contador.incrementa()
contador.incrementa()
console.log(contador.verContador())

const creaContador=function(){
    let contador=0

    function incrementa(){
        contador++
    }

    function decrementa(){
        contador--
    }

    function verContador(){
        return contador
    }

    return {incrementa, decrementa, verContador}    

}

let cont1=creaContador()
let cont2=creaContador()

cont1.decrementa()
cont1.decrementa()
cont1.decrementa()
cont2.incrementa()
cont2.incrementa()
console.log(cont1.verContador())
console.log(cont2.verContador())

const creaPersona=function(nom, ape){
    let nombre=nom
    let apellido=ape

    function verNombreCompleto(){
        return `${nombre} ${apellido}`
    }

    function setNombre(nom){
        nombre=nom
    }

    return {verNombreCompleto, setNombre}
}

let per01=creaPersona('Ezequiel','Lopez')
let per02=creaPersona('Romina','Roldan')
console.log(per01.verNombreCompleto())
console.log(per02.verNombreCompleto())
per02.setNombre('Laura')
console.log(per02.verNombreCompleto())
