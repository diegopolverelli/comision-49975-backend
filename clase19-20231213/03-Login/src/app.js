import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import mongoose from 'mongoose'
import sessions from 'express-session'
import mongoStore from 'connect-mongo'
// import crypto from 'crypto'

import { router as vistasRouter } from './routes/vistas.router.js';
import { router as sessionRouter } from './routes/session.router.js';
import { usuariosModelo } from './dao/models/usuarios.modelo.js';

const PORT=3000;

const app=express();

app.use(sessions(
    {
        secret:"codercoder123",
        resave: true, saveUninitialized: true,
        store: mongoStore.create(
            {
                mongoUrl:'mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority',
                mongoOptions:{dbName:"clase19"},
                ttl:3600
            }
        )
    }
))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)
app.use('/api/sessions', sessionRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority',
    {dbName:"clase19"})
    console.log("DB online...!!!")
    // await usuariosModelo.create({nombre:"Pedro", email:"pedro@test.com", password: crypto.createHmac("sha256", "coderSecret123").update("123").digest("hex")})
    // console.log(await usuariosModelo.find())
} catch (error) {
    console.log(error.message)
}
