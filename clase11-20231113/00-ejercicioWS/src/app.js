import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io'

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)
app.use('/api/heroes', (req, res, next)=>{
    req.codigo="007"
    if(req.query.nombre){
        req.query.nombre=req.query.nombre.toLowerCase()
    }
    req.io=io

    next()
}, heroesRouter)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

export const io=new Server(server)

// sensor 
setInterval(() => {
    let temperatura=Math.floor(Math.random()*(7)+34)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    io.emit("nuevaLecturaTemperatura", temperatura)
}, 1000);


// module.exports={io} // iría en app.js
// const io=require('../app.js').io  //cualquiera de estas otras 2 en router
// const {io}=require('../app.js')
