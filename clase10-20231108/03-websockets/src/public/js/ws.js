// console.log('hola, ws.js script...!!')

const socket=io()

let divMensajes=document.getElementById("mensajes")
let inputMensaje=document.getElementById("mensaje")

let nombre=prompt("Ingrese su nombre")
document.title=nombre

socket.on("hello",(datos)=>{
    console.log(`${datos.emisor} dice ${datos.mensaje}`)

    socket.emit("id",{nombre})

})

socket.on("nuevoUsuario",datos=>{
    console.log(datos.mensaje)
})

inputMensaje.addEventListener("keyup",(evento)=>{
    // console.log(evento, evento.target.value)
    if(evento.code==="Enter"){
        socket.emit("mensaje",{mensaje:evento.target.value, nombre})
        evento.target.value=""
    }
})

socket.on("nuevoMensaje",datos=>{
    let parrafo=document.createElement("p")
    parrafo.innerHTML=`<strong>${datos.nombre}</strong> dice: ${datos.mensaje}`
    divMensajes.append(parrafo)
})

socket.on("hora", datos=>{
    console.log(datos.hora)
})