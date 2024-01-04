import {fileURLToPath} from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken'

export const SECRETKEY="codercoder2023"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const generaToken=(usuario)=>jwt.sign({...usuario}, SECRETKEY, {expiresIn: "1h"})

export const auth=(req, res, next)=>{
    // if(!req.headers.authorization){
    //     res.setHeader('Content-Type','application/json');
    //     return res.status(401).json({error:`Usuario no autenticado`})
    // }
    
    // let token=req.headers.authorization.split(" ")[1]
    if(!req.cookies.coderCookie){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Usuario no autenticado`})
    }

    let token=req.cookies.coderCookie
    console.log(token)

    try {
        let usuario=jwt.verify(token, SECRETKEY)
        req.user=usuario
        next()
    } catch (error) {
        return res.status(401).json({error})
    }

}


