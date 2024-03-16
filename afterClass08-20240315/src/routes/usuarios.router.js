import { Router } from 'express';
import { usuarioModelo } from '../dao/models/usuarios.model.js';
export const router=Router()

router.get('/',async(req,res)=>{

    // let usuarios=await usuarioModelo.findAll({where:{email:"juan@test.com"}})
    let usuarios=await usuarioModelo.findAll()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuarios})
})

router.get('/:id',async(req,res)=>{

    let {id}=req.params

    // let usuarios=await usuarioModelo.findAll({where:{email:"juan@test.com"}})
    try {
        let usuario=await usuarioModelo.findOne({where:{id}})
        if(usuario){
            res.setHeader('Content-Type','application/json')
            res.status(200).json({usuario})
    
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen usuarios con id ${id}`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:error.message
            })
    }

})

router.put('/:id',async(req,res)=>{

    let {id}=req.params
    let aModificar=req.body// falta VALIDAR...!!!

    // let usuarios=await usuarioModelo.findAll({where:{email:"juan@test.com"}})
    try {
        let usuario=await usuarioModelo.findOne({where:{id}})
        if(usuario){
            let props=Object.keys(aModificar)
            props.forEach(prop=>{
                if(usuario[prop]){
                    usuario[prop]=aModificar[prop]
                }else{
                    console.log(`No existe la propiedad ${prop} en la tabla usuarios...!!!`)
                }
            })

            let usuarioModificado=await usuario.save()

            res.setHeader('Content-Type','application/json')
            res.status(200).json({usuarioModificado})
    
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen usuarios con id ${id}`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:error.message
            })
    }

})

router.delete('/:id',async(req,res)=>{

    let {id}=req.params

    // let usuarios=await usuarioModelo.findAll({where:{email:"juan@test.com"}})
    try {
        let usuario=await usuarioModelo.findOne({where:{id}})
        if(usuario){
            let usuarioEliminado=await usuario.destroy()

            res.setHeader('Content-Type','application/json')
            res.status(200).json({usuarioEliminado})
    
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen usuarios con id ${id}`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:error.message
            })
    }

})




router.put('/modi/:id',async(req,res)=>{

    let {id}=req.params
    let aModificar=req.body// falta VALIDAR...!!!

    // let usuarios=await usuarioModelo.findAll({where:{email:"juan@test.com"}})
    try {
        let usuario=await usuarioModelo.findOne({where:{id}})
        if(usuario){
            usuario={
                ...usuario, 
                ...aModificar, 
                id
            }
            let usuarioModificado=await usuario.save()

            res.setHeader('Content-Type','application/json')
            res.status(200).json({usuarioModificado})
    
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen usuarios con id ${id}`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:error.message
            })
    }

})



router.post("/", async(req,res)=>{
    let usuario=req.body
    // faltan validaciones...!!!

    try {
        let nuevoUsuario=await usuarioModelo.create(usuario)
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:error.message
        })
        
    }


})


// update / delete:
// let usuario=await usuarioModelo.findOne()
// usuario.save()
// usuario.destroy()
