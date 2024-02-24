import passport from "passport";
import local from "passport-local"
import { usuarioModelo } from "../dao/models/usuario.model.js";
import { carritoModelo } from "../dao/models/carrito.model.js";
import { generaHash } from "../utils.js";
import { CarritoDAO } from "../dao/carrito.dao.js";

let carritoService=new CarritoDAO()

export const initPassport=()=>{
    passport.use("registro", new local.Strategy(
        {
            usernameField:"email",
            passReqToCallback:true
        },
        async (req, username, password, done)=>{
            try {
                let {nombre, email}=req.body
                if(!nombre || !email){
                    return done(null, false, {message:"Complete los datos nombre / email / password"})
                }
                
                let existe=await usuarioModelo.findOne({email})
                if(existe){
                    return done(null, false, {message:`Ya existe un usuario con email ${email}`})
                }
                
                // let carritoNuevo=await carritoModelo.create({productos:[]})
                let carritoNuevo=await carritoService.create()
                console.log("Carrito generado con create",carritoNuevo)
                password=generaHash(password)

                let usuario=await usuarioModelo.create(
                    {
                        nombre, email, password, 
                        carrito_id:carritoNuevo._id
                    }
                )

                return done(null, usuario)

            } catch (error) {
                return done(error)
            }
        }
    ))
}