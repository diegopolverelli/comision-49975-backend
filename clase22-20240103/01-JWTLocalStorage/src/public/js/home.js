// console.log("hola")

let inputEmail=document.getElementById("email")
let inputPassword=document.getElementById("password")
let divMensaje=document.getElementById("mensaje")
divMensaje.innerHTML=""
let btnSubmit=document.getElementById("btnSubmit")

let link=document.getElementById("link")


btnSubmit.addEventListener("click",async (e)=>{
    e.preventDefault()

    if(inputEmail.value.trim().length===0 || inputPassword.value.trim().length===0){
        divMensaje.innerHTML="Complete los datos"
        return 
    }

    let body={
        email:inputEmail.value.trim(),
        password:inputPassword.value.trim()
    }

    let respuesta=await fetch("http://localhost:3000/login",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    console.log(respuesta)
    if(respuesta.status===200){
        let datos=await respuesta.json()
        console.log(datos)
        localStorage.setItem("coderToken", datos.token)
        divMensaje.innerHTML="Login correcto...!!!"
    }else{
        divMensaje.innerHTML="Credenciales incorrectas"
    }
    
})


link.addEventListener("click",async (e)=>{
    e.preventDefault()

    let respuesta=await fetch("http://localhost:3000/usuario", {
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("coderToken")}`
        }
    })
    console.log(respuesta)
    if(respuesta.status===200){
        let datos=await respuesta.text()
        console.log(datos)
        document.body.innerHTML=datos
    }else{
        divMensaje.innerHTML="Usuario no autenticado...!!!"
    }


})