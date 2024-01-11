import passport from "passport";
import { MiRouter } from "./router.js";
import { generaToken, passportCall } from "../utils.js";

export class SessionsRouter extends MiRouter{
    init(){
        this.post("/registro", ["PUBLIC"], passportCall("registro"), (req,res)=>{

            return res.successAlta("Registro correcto...!!!", req.user)
        })

        this.post("/login", ["PUBLIC"], passportCall("login"), (req,res)=>{

            let token=generaToken(req.user)
            res.cookie("coderCookie", token, {httpOnly:true, maxAge: 1000*60*60})
            return res.success(`Login correcto para el usuario ${req.user.nombre}, con rol: ${req.user.rol}`)
        })
    }
}