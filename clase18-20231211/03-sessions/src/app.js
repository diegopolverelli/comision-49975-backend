import express from 'express';
import sessions from 'express-session'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(sessions({
    secret: "codercoder123",
    resave: true, 
    saveUninitialized: true
}))


app.get('/',(req,res)=>{

    console.log(req.session)

    let mensaje="Bienvenido"
    if(req.session.contador){
        req.session.contador++
        mensaje+=`. Visitas a esta ruta: ${req.session.contador}`

    }else{
        req.session.contador=1
    }

    if(req.query.nombre){
        if(req.session.usuario){
            let indice=req.session.usuario.findIndex(u=>u.nombre===req.query.nombre)
            if(indice===-1){
                req.session.usuario.push({
                    nombre:req.query.nombre, visitas:1
                })
            }else{
                req.session.usuario[indice].visitas++
            }
        }else{
            req.session.usuario=[
                {
                    nombre:req.query.nombre, 
                    visitas: 1
                }
            ]
        }
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(mensaje);

})

app.get('/reset',(req,res)=>{
    
    req.session.destroy(error=>{
        if(error){
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
        }
    })

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        resultado:"Session reiniciada...!!!"
    });
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
