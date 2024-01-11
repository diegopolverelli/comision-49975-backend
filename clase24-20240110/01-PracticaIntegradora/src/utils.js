import {fileURLToPath} from 'url';
import { dirname } from 'path';
import passport from 'passport';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const SECRET="Coder12345"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const creaHash=(password)=>bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const validaPassword=(usuario, password)=>bcrypt.compareSync(password, usuario.password)


export const passportCall=(estrategia)=>{
    return function(req, res, next) {
        passport.authenticate(estrategia, function(err, user, info, status) {
          if (err) { return next(err) }
          if (!user) {
                return res.errorCliente(info.message?info.message:info.toString())
          }
          req.user=user
          return next()
        })(req, res, next);
      }
}

export const generaToken=(usuario)=>jwt.sign({...usuario}, SECRET, {expiresIn: "1h"})