import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from "bcrypt"
import passport from 'passport';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const generaHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const validaPass = (usuario, password) => bcrypt.compareSync(password, usuario.password)

export const passportView = (estrategia) => function (req, res, next) {
    passport.authenticate(estrategia, function (err, user, info, status) {
        console.log("Entro al passportView")
        if (err) {
            console.log("Salio por el if (err)...") 
            return next(err) 
        }
        if (!user) {
            console.log("Salio por el no hay user")
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ error: info.message ? info.message : info.toString() })
        }
        //   res.redirect('/account');
        req.user = user
        console.log("Va a salir del  passportView")

        next()
    })(req, res, next);
}