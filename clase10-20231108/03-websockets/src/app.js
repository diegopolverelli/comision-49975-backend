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
app.use('/api/heroes', heroesRouter)


const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

export const serverSockets=new Server(serverHTTP) //io

serverSockets.on("connection",socket=>{
    console.log(`se conecto un cliente con id ${socket.id}`)

    socket.emit("hello", {emisor:"Server", mensaje:"Bienvenido...!!!"})

    socket.on("id", datos=>{
        console.log(`El socket con id ${socket.id} se ha identificado como ${datos.nombre}`)
        socket.broadcast.emit("nuevoUsuario",{emisor:'Server', mensaje:`${datos.nombre} se ha unido al servidor`})
    })

    socket.on("mensaje",datos=>{
        serverSockets.emit("nuevoMensaje",datos)
    })

})

setInterval(() => {
    serverSockets.emit("hora",{hora:new Date().toLocaleTimeString()})
}, 2000);
