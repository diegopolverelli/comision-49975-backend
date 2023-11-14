console.log("cargo ok heroes.js")

const socket=io()

socket.on("nuevoHeroe",heroe=>{
    console.log("viene importado:",heroe)
    // document.location.href='/heroes'
    let ulHeroes=document.querySelector('ul')
    let liNuevoHeroe=document.createElement('li')
    liNuevoHeroe.innerHTML=heroe
    ulHeroes.append(liNuevoHeroe)
})

socket.on("nuevoHeroeConMiddleware", heroe=>{
    console.log("viene desde un middleware:",heroe)
})