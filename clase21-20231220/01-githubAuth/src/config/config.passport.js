import passport from 'passport'
import github from 'passport-github2'
import { usuariosModelo } from '../models/usuario.model.js'

export const initPassport=()=>{

    passport.use('github', new github.Strategy(
        {
            clientID: "Iv1.6e12a2c1f628e300", 
            clientSecret: "0acf1b1bd8d61a94399b97c39fc76f1ed41f7e3e", 
            callbackURL: "http://localhost:3000/api/sessions/callbackGithub", 
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