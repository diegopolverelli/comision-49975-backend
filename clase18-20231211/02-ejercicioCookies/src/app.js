import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import cookieParser from 'cookie-parser'

const PORT=3000;

const app=express();

app.use(cookieParser())
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));



app.get('/',(req,res)=>{

    let {error, ok}=req.query

    res.setHeader('Content-Type','text/html');
    res.status(200).render('index', {error, ok});
})

app.post('/set',(req,res)=>{

    let cookies=Object.keys(req.cookies)
    cookies.forEach(c=>{
        res.clearCookie(c)
    })

    let {nombre, email}=req.body
    if(!nombre || !email){
        res.redirect('/?error=1')
    }

    res.cookie(nombre, email, {maxAge: 1000*10})

    res.redirect('/?ok=1')

});

app.get('/get',(req,res)=>{
    
    let cookies=req.cookies

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(cookies);
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
