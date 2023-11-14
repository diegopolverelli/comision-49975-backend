const express=require('express');
const path=require('path')
const fs=require('fs')

let ruta=path.join(__dirname,'archivos','usuarios.json') 

function getUsers(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta,'utf-8'))
    }else{
        return []
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))    
}

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/api/usuarios',(req,res)=>{

    let usuarios=getUsers()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarios});
})

app.get('/api/usuarios/:id',(req,res)=>{
    // let id=req.params.id
    let {id}=req.params
    id=parseInt(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Id tiene que ser numérico`})
    }

    let usuarios=getUsers()
    let usuario=usuarios.find(usuario=>usuario.id===id)
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con id ${id}`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuario});
})

app.post('/api/usuarios',(req, res)=>{
    let {nombre, apellido}=req.body
    if(!nombre || !apellido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Nombre y apellido son datos obligatorios`})
    }

    // validaciones sobre los datos que llegan
    let exReg=/[0-9]/
    if(exReg.test(nombre) || exReg.test(apellido)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Nombre o apellido, con formato inválido`})
    }

    let usuarios=getUsers()
    let existe=usuarios.find(usuario=>usuario.nombre===nombre && usuario.apellido===apellido)
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El usuarios ${nombre} ${apellido} ya existe en BD`})
    }

    let id=1
    if(usuarios.length>0){
        id=usuarios[usuarios.length-1].id +1
    }

    let nuevoUsuario={
        id, nombre, apellido
    }

    usuarios.push(nuevoUsuario)

    saveUsers(usuarios)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nuevoUsuario});

}
)

app.put('/api/usuarios/:id',(req,res)=>{
    let {id}=req.params
    // let id=req.params.id
    id=parseInt(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Indique un id numérico`})
    }

    let usuarios=getUsers()
    let indiceUsuario=usuarios.findIndex(usuario=>usuario.id===id)
    if(indiceUsuario===-1){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con id ${id}`})
    }

    let propiedadesPermitidas=["nombre", "apellido", "edad", "simpatizaCon", "domicilio", "email"]
    let propiedadesQueLlegan=Object.keys(req.body)
    console.log(propiedadesQueLlegan)
    let valido=propiedadesQueLlegan.every(propiedad=>propiedadesPermitidas.includes(propiedad))    
    if(!valido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se aceptan algunas propiedades`, propiedadesPermitidas})
    }

    let usuarioModificado={
        ...usuarios[indiceUsuario],    // ... es el operador spread  
        ...req.body,
        id
    }

    usuarios[indiceUsuario]=usuarioModificado

    saveUsers(usuarios)

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        usuarioModificado        
    });
});

app.delete('/api/usuarios/:id',(req,res)=>{
    let {id}=req.params
    // let id=req.params.id
    id=parseInt(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Indique un id numérico`})
    }

    let usuarios=getUsers()
    let indiceUsuario=usuarios.findIndex(usuario=>usuario.id===id)
    if(indiceUsuario===-1){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con id ${id}`})
    }

    let usuarioEliminado=usuarios.splice(indiceUsuario,1)

    saveUsers(usuarios)
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        usuarioEliminado
    });
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
