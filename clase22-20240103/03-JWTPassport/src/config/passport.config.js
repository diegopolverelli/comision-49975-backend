import passport from 'passport'
import passportJWT from 'passport-jwt'
import { SECRETKEY } from '../utils.js'

const buscaToken=(req)=>{
    let token=null

    if(req.cookies.coderCookie){
        token=req.cookies.coderCookie
    }

    return token
}

export const initPassport=()=>{


    passport.use("jwt", new passportJWT.Strategy(
        {
            secretOrKey:SECRETKEY,
            jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([buscaToken])
        },
        async(contenidoToken , done)=>{
            try {
                console.log("Passport...!!!")
                return done(null, contenidoToken)
            } catch (error) {
                return done(error)
            }
        }
    ))


    // serializer / deserializer (solo para sesiones , así que no lo usamos)


}
