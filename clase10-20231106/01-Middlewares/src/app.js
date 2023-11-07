import express from 'express';
import { router as heroesRouter } from './routes/routerHeroes.js';
const PORT=3000;

const app=express();

function mid01(req, res, next){
    console.log('pasó por el mid01...!!!')
    next()
}

const mid02=function(req, res, next){
    console.log('pasó por el mid02...!!!')
    next()
}

const mid03=(req, res, next)=>{
    console.log('paso x mid03...!!!')
    req.codigo="CODER1234" // agrego una propiedad al req
    if(req.query.nombre){
        req.query.nombre=req.query.nombre.toUpperCase() // trabajo (si llega) sobre un query param
    }
    
    next()
}

const auth=(req, res, next)=>{
    let {nombre, clave}=req.query
    if(!nombre || !clave){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre y clave`})
    }

    let usuarios=['admin', 'diego', 'ana']

    if(usuarios.includes(nombre.toLowerCase()) && clave==="123456"){
        next()
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`credenciales invalidas`})
    }
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/heroes', (req, res, next)=>{
    console.log('otro mid... nivel router???')
    next()
},heroesRouter)
// app.use(auth ,mid01, mid02, mid03)

app.get('/',(req,res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK '+req.codigo+' '+req.query.nombre);
})

app.get('/1',mid01,mid03,(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'1'
    });
});

app.get('/2',mid02,(req,res)=>{
    
    clg('hola')

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'2'
    });
});

app.use((error, req, res, next)=>{
    if(error){
        console.log(error.message)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
    detalle: error.message})
        
    }

    next()
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
