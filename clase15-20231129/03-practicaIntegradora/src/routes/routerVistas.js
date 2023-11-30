import { Router } from 'express';
import { ManagerUsuarios } from '../dao/managerUsuarios.js';
export const router=Router()

const managerUsuarios=new ManagerUsuarios()

router.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/html')
    res.status(200).render('home')
})

router.get('/usuarios',async(req,res)=>{

    let usuarios=await managerUsuarios.listarUsuarios()
    if(!usuarios){
        console.log('No se recuperaron usuarios')
        usuarios=[]
    }
    console.log(usuarios)

    res.setHeader('Content-Type','text/html')
    res.status(200).render('usuarios',{usuarios})
})