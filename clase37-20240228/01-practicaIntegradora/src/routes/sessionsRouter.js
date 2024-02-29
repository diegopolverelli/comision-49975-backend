import { Router } from 'express';
import bcrypt from 'bcrypt'
import { usuariosModelo } from '../models/usuarios.model.js';
import jwt from "jsonwebtoken"
import { enviarEmail } from '../mails/mails.js';
export const router=Router()

router.post('/login',async(req,res)=>{
    let {email, password, navegador}=req.body
    if(!email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete email y password`})
    }

    let usuario=await usuariosModelo.findOne({email})
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con email ${email}`})
    }

    if(!bcrypt.compareSync(password, usuario.password)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Credenciales incorrectas`})
    }

    console.log(`Login correcto para el usuario ${usuario.nombre} ${usuario.apellido}`)

    if(navegador){
        return res.redirect('/?mensaje=Login correcto...!!!')
    }


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({status:"Login correcto...!!!", payload:usuario });
    

})

router.post('/registro',async(req,res)=>{
    let {nombre, apellido, email, password, navegador}=req.body
    if(!nombre || !apellido || !email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos...!!!`})
    }

    let existe=await usuariosModelo.findOne({email})
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existen usuarios con email ${email} en la BD`})
    }

    password=bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    let nuevoUsuario={
        nombre, email, password, apellido
    }

    nuevoUsuario=await usuariosModelo.create(nuevoUsuario)
    console.log(`Usuario registrado correctamente: ${email}`)

    if(navegador){
        return res.redirect('/?mensaje=Registro correcto...!!!')
    }

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        nuevoUsuario
    });
});

router.post("/recupero01",async(req,res)=>{
    let {email}=req.body

    let usuario=await usuariosModelo.findOne({email}).lean()
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe el email ${email}`})
    }

    delete usuario.password
    let token=jwt.sign({...usuario}, "CoderCoder123", {expiresIn:"1h"})

    let mensaje=`Hola. Ha solicitado reiniciar... 
Haga click en el siguiente link: <a href="http://localhost:3000/api/sessions/recupero02?token=${token}">Resetear Contraseña</a>
Si no genero un reseteto... `

    let respuesta=await enviarEmail(email, "Recupero Password", mensaje)
    console.log(respuesta)

    // res.setHeader('Content-Type','application/json');
    // return res.status(200).json({respuesta});

    if(respuesta.accepted.length>0){
        res.redirect("http://localhost:3000/index.html?mensaje=Recibierá en breve un mail... siga los pasos...")
    }else{
        res.redirect("http://localhost:3000/index.html?mensaje=Error al intentar recuperar contraseña")

    }

})

router.get("/recupero02",(req,res)=>{
    let {token}=req.query

    try {
        let datosToken=jwt.verify(token, "CoderCoder123")
        res.redirect("http://localhost:3000/recupero02.html?token="+token)
    } catch (error) {
        // res.setHeader('Content-Type','application/json');
        // return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
        res.redirect("http://localhost:3000/index.html?mensaje=Error token:"+error.message)

    }
})

router.post("/recupero03",async(req,res)=>{
    let {password, password2, token}=req.body

    if(password!==password2){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Claves difieren...!!!`})
    }

    try {
        let datosToken=jwt.verify(token, "CoderCoder123")
        console.log(datosToken)
        let usuario=await usuariosModelo.findOne({email:datosToken.email}).lean()
        if(!usuario){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error de usuario`})
        }
        if(bcrypt.compareSync(password, usuario.password)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ha ingresado una contraseña utilizada en el pasado. No esta permitido`})
        }
        console.log("llego 01")
        let usuarioActualizado={...usuario, password:bcrypt.hashSync(password, bcrypt.genSaltSync(10))}
        console.log("llego 02")

        console.log(usuarioActualizado)
        await usuariosModelo.updateOne({email:datosToken.email}, usuarioActualizado)
        console.log("llego 03")

        res.redirect("http://localhost:3000/index.html?mensaje=Contraseña reseteada...!!!")
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }


})