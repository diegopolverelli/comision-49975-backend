import express from 'express';
import handlebars from 'express-handlebars'
import compression from 'express-compression'
import zlib from 'zlib'

import { router as vistasRouter } from './router/vistas.router.js';
const PORT=3000;

const app=express();

// app.use(compression({})) // gzip
app.use(compression({brotli:{enabled:true}})) // brotli
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')
app.use("/",vistasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/textoLargo2',(req,res)=>{

    let texto="Texto muuuuuuuuuuuuuuuuuuuuuuuuuuuy largo...".repeat(100000)

    res.status(200).send(texto);
})

app.get('/textoLargo',(req,res)=>{

    let texto="Texto muuuuuuuuuuuuuuuuuuuuuuuuuuuy largo...".repeat(100000)
    console.time("zip:")
    let textoComprimido=zlib.gzipSync(texto, {})
    console.timeEnd("zip:")
    // let textoComprimido=zlib.deflateSync(texto, {})
    console.time("br:")
    textoComprimido=zlib.brotliCompressSync(texto, {})
    console.timeEnd("br:")

    res.setHeader('Content-Type','text/html');
    // res.setHeader('Content-Encoding','gzip');
    // res.setHeader('Content-Encoding','deflate');
    res.setHeader('Content-Encoding','br');
    res.status(200).send(textoComprimido);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
