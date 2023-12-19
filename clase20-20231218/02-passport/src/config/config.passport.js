import passport from 'passport'
import local from 'passport-local'
import { usuariosModelo } from '../dao/models/usuarios.modelo.js'
import { creaHash } from '../utils.js'


export const inicializarPassport=()=>{

    passport.use('registro', new local.Strategy(
        {
            passReqToCallback: true, usernameField: 'email' //, passwordField: "clave"
        },
        async(req, username, password, done)=>{
            try {
                console.log("Estrategia local registro de Passport...!!!")
                let {nombre, email}=req.body
                if(!nombre || !email || !password){
                    // return res.redirect('/registro?error=Complete todos los datos')
                    return done(null, false)
                }
            
                let regMail=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
                console.log(regMail.test(email))
                if(!regMail.test(email)){
                    // return res.redirect('/registro?error=Mail con formato incorrecto...!!!')
                    return done(null, false)
                }
            
                let existe=await usuariosModelo.findOne({email})
                if(existe){
                    // return res.redirect(`/registro?error=Existen usuarios con email ${email} en la BD`)
                    return done(null, false)
                }
                
                // password=crypto.createHmac("sha256", "codercoder123").update(password).digest("hex")
                password=creaHash(password)
                console.log(password)
                let usuario
                try {
                    usuario=await usuariosModelo.create({nombre, email, password})
                    // res.redirect(`/login?mensaje=Usuario ${email} registrado correctamente`)
                    return done(null, usuario)
                    // previo a devolver un usuario con done, passport graba en la req, una propiedad
                    // user, con los datos del usuario. Luego podré hacer req.user
                } catch (error) {
                    // res.redirect('/registro?error=Error inesperado. Reintente en unos minutos')
                    return done(null, false)
                }
                   
            } catch (error) {
                return done(error)
            }
        }
    ))

    passport.use('login', new local.Strategy(
        {
            usernameField: 'email'
        },
        async(username, password, done)=>{
            try {
                
            } catch (error) {
                done(error, null)
            }
        }
    ))


    // configurar serializador y deserializador
    passport.serializeUser((usuario, done)=>{
        return done(null, usuario._id)
    })

    passport.deserializeUser(async(id, done)=>{
        let usuario=await usuariosModelo.findById(id)
        return done(null, usuario)
    })

} // fin inicializarPassport