import express from 'express';
import { router as pruebasRouter } from './routes/pruebas.router.js';
import { HeroesRouter } from './routes/heroes.router.js';
import { SessionsRouter } from './routes/sessions.router.js';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser'
import { initPassport } from './config/passport.config.js';

const PORT=3000;

const app=express();

const heroesRouter=new HeroesRouter()
const sessionsRouter=new SessionsRouter()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
initPassport()
app.use(passport.initialize())

app.use("/api/pruebas", pruebasRouter)
app.use("/api/heroes", heroesRouter.getRouter())
app.use("/api/sessions", sessionsRouter.getRouter())

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

try {
    await mongoose.connect("mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority", {dbName: "clase24"})
    console.log("DB Online...!!!")
} catch (error) {
    console.log("Error de conexión. Detalle:", error.message)
}

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
