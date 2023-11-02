const express=require('express');
const routerUsuarios=require('./routes/usuarios.router')

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/usuarios', routerUsuarios)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h2>Home Page</h2>');
})

// app.get('/heroe/:id',(req,res)=>{
//     let id=req.params.id
//     res.setHeader('Content-Type','text/plain');
//     res.status(200).send(id);
// })





const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
