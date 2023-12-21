import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import session from 'express-session'
import connectMongo from 'connect-mongo'
import {engine} from 'express-handlebars';
import mongoose from 'mongoose';

import { router as routerVistas} from './routes/views.router.js';
import { router as sessionsRouter } from './routes/sessions.router.js';
import { initPassport } from './config/config.passport.js';
import passport from 'passport';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use(session({
    secret:'coderSecret',
    resave:true, saveUninitialized:true,
    store: connectMongo.create({
        mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase21',
        ttl:3600 
    })
}))
initPassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routerVistas)
app.use('/api/sessions', sessionsRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const conectar=async()=>{
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase21')
        console.log(`Conexión a DB establecida`)
    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err}`)
    }
}

conectar();
