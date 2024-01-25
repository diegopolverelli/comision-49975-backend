const cargarH=async()=>{
    let respuesta=await fetch("http://localhost:3000/api/heroes")
    let {heroes}=await respuesta.json()

    console.log(heroes)
    // datos.heros.forEach
    let html=""
    heroes.forEach(heroe=>{
        html+=`<li>${heroe.name}</li>`
    })

    document.getElementById("datos").innerHTML=html
}

const cargarV=async()=>{
    let respuesta=await fetch("http://localhost:3000/api/villanos")
    let {villanos}=await respuesta.json()

    console.log(villanos)
    // datos.heros.forEach
    let html=""
    villanos.forEach(villano=>{
        html+=`<li>${villano.name}</li>`
    })

    document.getElementById("datos").innerHTML=html
}