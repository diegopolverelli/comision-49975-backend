import { Router } from 'express';
import { usuariosModelo } from '../dao/models/usuarios.modelo.js';
import { creaHash, validaPassword } from '../utils.js';
import passport from 'passport';
// import crypto from 'crypto'
export const router=Router()

router.post('/login', async(req, res)=>{

    let {email, password}=req.body
    if(!email || !password){
        return res.redirect('/login?error=Complete todos los datos')
    }

    // password=crypto.createHmac("sha256", "codercoder123").update(password).digest("hex")

    let usuario=await usuariosModelo.findOne({email})
    if(!usuario){
        return res.redirect(`/login?error=credenciales incorrectas`)
    }
    if(!validaPassword(usuario, password)){
        return res.redirect(`/login?error=credenciales incorrectas`)
    }
    
    req.session.usuario={
        nombre:usuario.nombre, email:usuario.email
    }

    res.redirect('/perfil')

})

router.get('/errorRegistro',(req,res)=>{
    return res.redirect('/registro?error=Error en el proceso de registro')
})

router.post('/registro', passport.authenticate('registro', {failureRedirect:'/api/sessions/errorRegistro'}), async(req,res)=>{

    let {email}=req.body
    // let {nombre, email, password}=req.body
    // if(!nombre || !email || !password){
    //     return res.redirect('/registro?error=Complete todos los datos')
    // }

    // let regMail=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    // console.log(regMail.test(email))
    // if(!regMail.test(email)){
    //     return res.redirect('/registro?error=Mail con formato incorrecto...!!!')
    // }

    // let existe=await usuariosModelo.findOne({email})
    // if(existe){
    //     return res.redirect(`/registro?error=Existen usuarios con email ${email} en la BD`)
    // }
    
    // // password=crypto.createHmac("sha256", "codercoder123").update(password).digest("hex")
    // password=creaHash(password)
    // console.log(password)
    // let usuario
    // try {
    //     usuario=await usuariosModelo.create({nombre, email, password})
    //     res.redirect(`/login?mensaje=Usuario ${email} registrado correctamente`)
        
    // } catch (error) {
    //     res.redirect('/registro?error=Error inesperado. Reintente en unos minutos')
    // }

    res.redirect(`/login?mensaje=Usuario ${email} registrado correctamente`)

})

router.get('/logout',(req,res)=>{
    
    req.session.destroy(error=>{
        if(error){
            res.redirect('/login?error=fallo en el logout')
        }
    })

    res.redirect('/login')

});