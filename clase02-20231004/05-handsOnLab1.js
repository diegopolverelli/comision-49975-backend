
const mostrarLista=(cadena=[])=>{

    if(!Array.isArray(cadena)){
        console.log('Solo se admiten argumentos de tipo array')
        return
    }

    if(cadena.length===0){
        console.log('Se ha ingresado un array sin datos')
        return
    }
    

    cadena.map(dato=>{
        console.log(dato)
    })

    console.log(`El array tiene ${cadena.length} elementos`)
}

mostrarLista([])
// let resultado=mostrarLista([1,2,3])
// console.log(resultado)
mostrarLista(['a', 'b', 'c'])
mostrarLista(['a', 'b', 'c', 'josé'])

let numeros=[1,2,3,4,5]
let dobles=numeros.map(numero=>numero*2)
console.table({numeros, dobles})

mostrarLista([1,2,3,4,5])
mostrarLista('jose')