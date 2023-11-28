import { Router } from "express";
import { usuariosModelo } from "../models/usuarios.model.js";
export const router=Router()

router.get('/',async(req,res)=>{

    // let usuarios=[{nombre:'Juan', email:'jlopez@gmail.com'}]
    let usuarios=[]
    try {
        usuarios=await usuariosModelo.find({deleted:false})
    } catch (error) {
        console.log(error.message)        
    }

    res.status(200).json({
        usuarios
    })
})

router.post('/',async(req, res)=>{
    let {nombre, email, apellido}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos: nombre y email obligatorios...!!!`})
    }

    let existe=false
    try {
        existe=await usuariosModelo.findOne({deleted:false, email})
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})
    }

    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El usuario con email ${email} ya existe en BD...!!!`})
    }

    try {
        let nuevoUsuario=await usuariosModelo.create({nombre, email, apellido})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:nuevoUsuario});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})
    }



})