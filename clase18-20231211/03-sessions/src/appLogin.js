import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


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






const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
