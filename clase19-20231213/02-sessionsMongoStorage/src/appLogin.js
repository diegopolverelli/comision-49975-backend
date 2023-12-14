import express from 'express';
import sessions from 'express-session'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(sessions(
    {
        secret: 'coder123',
        resave: true, 
        saveUninitialized: true
    }
))


let usuarios=[
    {
        nombre:'Diego', password:'123', 
        rol: 'usuario'
    },
    {
        nombre:'Laura', password:'123', 
        rol: 'usuario'
    },
    {
        nombre:'Admin', password:'codercoder', 
        rol: 'admin'
    },
]

app.get('/logout',(req,res)=>{
    
    req.session.destroy(error=>{
        if(error){
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
        }
    })

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        logout:"OK"        
    });
});

app.get('/login',(req,res)=>{
    
    let {nombre, password}=req.query
    if(!nombre || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre y password`})
    }

    let usuario=usuarios.find(u=>u.nombre===nombre && u.password===password)
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`credenciales invalidas...!!!`})
    }

    req.session.usuario=usuario

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        resultado:`Login correcto para ${usuario.nombre}`
    });
});

const auth=(req, res, next)=>{
    if(!req.session.usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`No existen usuarios logueados...!!! vaya a /login`})
    }

    next()
}

app.get('/datos', auth, (req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        datos:"Datos confidenciales..."
    });
});

app.get('/', auth, (req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        datos:"Home Page"
    });
});


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
