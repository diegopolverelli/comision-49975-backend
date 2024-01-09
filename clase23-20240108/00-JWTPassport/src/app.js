import express from 'express';
import handlebars from 'express-handlebars'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import { auth, generaToken, passportCall } from './utils.js';
import passport from 'passport';
import { initPassport } from './config/passport.config.js';
import { router as heroesRouter } from './routes/heroes.router.js';

const PORT=3000;


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
initPassport()
app.use(passport.initialize())
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")
app.use(express.static("./src/public"))

app.use("/api/heroes", passport.authenticate("jwt", {session:false}), heroesRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})

let usuarios=[]
if(fs.existsSync('./src/usuarios.json')){
    usuarios=JSON.parse(fs.readFileSync('./src/usuarios.json','utf-8'))
}

app.post('/registro',(req,res)=>{
    let {nombre, email, password}=req.body
    if(!nombre || !email || !password) return res.status(400).send('Ingrese todos los datos')

    let usuario=usuarios.find(u=>u.email===email)
    if(usuario) return res.status(400).send(`El usuario ${email} ya existe en la DB`)

    let id=1
    if(usuarios.length>0) id=usuarios[usuarios.length-1].id+1

    usuario={
        id, nombre, email, password
    }

    usuarios.push(usuario)

    fs.writeFileSync('./src/usuarios.json',JSON.stringify(usuarios,null,5))

    res.json({
        usuarioCreado:usuario
    })
})

app.post('/login',(req,res)=>{
    let {email, password}=req.body
    if(!email || !password) return res.status(400).send('Ingrese email y password')

    usuarios=JSON.parse(fs.readFileSync('./src/usuarios.json','utf8'))

    let usuario=usuarios.find(u=>u.email===email && u.password===password)
    if(!usuario) return res.status(400).send(`Error credenciales`)

    let token=generaToken(usuario)

    res.cookie("coderCookie", token, {maxAge:1000*60*60, httpOnly:true})
    return res.status(200).json({
        usuarioLogueado:usuario,
        // token
    })

})

app.get("/pruebas", passport.authenticate('jwt', {session:false}), (req,res)=>{
    res.send("PRUEBAS...!!!")
})


const auth1=(permisos=[])=>function(req,res,next){

    permisos=permisos.map(p=>p.toLowerCase())

    if(permisos.includes("PUBLIC")){
        return next()
    }

    if(!req.user || !req.user.rol){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`No hay usuarios autenticados...!!!`})
    }

    if(!permisos.includes(req.user.rol.toLowerCase())){
        res.setHeader('Content-Type','application/json');
        return res.status(403).json({error:`No tiene privilegios suficientes para este recurso`})
    }

    return next()
}


// app.get('/usuario', auth, (req,res)=>{
// app.get('/usuario', passport.authenticate('jwt', {session:false}), (req,res)=>{
app.get('/usuario', passportCall('jwt'), auth1(["USUARIO", "ADMIN", "INVITADO"]),(req,res)=>{


    res.render("perfil", {usuario:req.user})
    // res.setHeader('Content-Type','application/json');
    // res.status(200).json({
    //     mensaje:'Usuario Logueado...!!!',
    //     usuario: req.user
    // });
});

// app.get('/protected', function(req, res, next) {
//     passport.authenticate('local', function(err, user, info, status) {
//       if (err) { return next(err) }
//       if (!user) { return res.redirect('/signin') }
//       res.redirect('/account');
//     })(req, res, next);
//   });

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
