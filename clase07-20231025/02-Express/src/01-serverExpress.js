const express=require('express')

const PORT=3000

const app=express()

app.get('/',(req, res)=>{

    res.send("Soy otro server, ahora desarrollado con ExpressJS...!!!")
})

app.get('/contacto',(req, res)=>{

    res.send("Contacto... módulo ")
})

app.get('/datos',(req, res)=>{

    let mensaje="DATOS"
    if(req.query.nombre){
        mensaje+=" "+req.query.nombre
    }
    console.log(req.query)


    res.send(mensaje)
})

const server=app.listen(PORT, ()=>{
    console.log(`Server on line en puerto ${PORT}`)
})