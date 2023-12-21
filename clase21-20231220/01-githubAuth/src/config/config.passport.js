import passport from 'passport'
import github from 'passport-github2'
import { usuariosModelo } from '../models/usuario.model.js'

export const initPassport=()=>{

    passport.use('github', new github.Strategy(
        {
            clientID: "", 
            clientSecret: "", 
            callbackURL: "", 
        },
        async(accessToken, refreshToken, profile, done)=>{
            try {
                // console.log(profile)
                let usuario=await usuariosModelo.findOne({email: profile._json.email})
                if(!usuario){
                    let nuevoUsuario={
                        nombre: profile._json.name,
                        email: profile._json.email, 
                        profile
                    }

                    usuario=await usuariosModelo.create(nuevoUsuario)
                }
                return done(null, usuario)


            } catch (error) {
                return done(error)
            }
        }
    ))


    // serializador / deserializador
    passport.serializeUser((usuario, done)=>{
        return done(null, usuario._id)
    })

    passport.deserializeUser(async(id, done)=>{
        let usuario=await usuariosModelo.findById(id)
        return done(null, usuario)
    })

} // fin initPassport