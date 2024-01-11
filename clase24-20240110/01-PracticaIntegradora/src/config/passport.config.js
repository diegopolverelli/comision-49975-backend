import passport from 'passport'
import local from 'passport-local'
import passportJWT from 'passport-jwt'
import { usuariosModelo } from '../dao/models/usuarios.model.js'
import { SECRET, creaHash, validaPassword } from '../utils.js'

const buscarToken=(req)=>{
    let token=null

    if(req.cookies.coderCookie){
        token=req.cookies.coderCookie
    }

    return token
}

export const initPassport=()=>{
    passport.use("jwt", new passportJWT.Strategy(
        {
            secretOrKey: SECRET,
            jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([buscarToken])
        },
        async (contenidoToken ,done)=>{
            try {
                return done(null, contenidoToken)
            } catch (error) {
                return done(error)
            }
        }
    ))

    passport.use("login", new local.Strategy(
        {
            usernameField: "email"
        },
        async(username, password, done)=>{
            try {
                let usuario=await usuariosModelo.findOne({email:username}).lean()
                if(!usuario){
                    return done(null, false, {message:`Credenciales incorrectas`})
                }
                if(!validaPassword(usuario, password)){
                    return done(null, false, {message:`Credenciales incorrectas`})
                }

                delete usuario.password
                return done(null, usuario)
                
            } catch (error) {
                return done(error)
            }
        }
    ))

    passport.use("registro", new local.Strategy(
        {
            passReqToCallback:true, 
            usernameField: "email"
        },
        async(req, username, password, done)=>{
            try {
                let {nombre, rol, email}=req.body
                if(!nombre || !email){
                    return done(null, false, {message:"Complete nombre, email, y password"})
                }

                let existe=await usuariosModelo.findOne({email}).lean()
                if(existe){
                    return done(null, false, {message:`Ya existe el usuario con email ${email}`})
                }

                let nuevoUsuario=await usuariosModelo.create(
                    {
                        nombre, rol, email, 
                        password: creaHash(password)
                    }
                )

                return done(null, nuevoUsuario)
                    
            } catch (error) {
                return done(error)
            }

        }
    ))



    // sin serializer / deserializar por no usar sessions
}