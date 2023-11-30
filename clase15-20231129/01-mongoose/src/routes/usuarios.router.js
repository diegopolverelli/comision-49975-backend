import { Router } from "express";
import { usuariosModelo } from "../models/usuarios.model.js";
import mongoose from "mongoose";
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

router.get('/:id',async(req,res)=>{
    let {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido...!!!`})
    }

    let existe
    try {
        existe=await usuariosModelo.findOne({deleted:false, _id:id}) 
        console.log(existe)
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})
    }

    if(!existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con id ${id}`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuario:existe});
})

router.post('/',async(req, res)=>{
    let {nombre, email, apellido, edad}=req.body
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
        let nuevoUsuario=await usuariosModelo.create({nombre, email, apellido, edad})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:nuevoUsuario});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})
    }

})

router.put('/:id',async(req,res)=>{
    let {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido...!!!`})
    }

    let existe
    try {
        existe=await usuariosModelo.findOne({deleted:false, _id:id}) 
        console.log(existe)
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})
    }

    if(!existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con id ${id}`})
    }

    if(req.body._id || req.body.email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se pueden modificar la propiedades "_id" y "email"`})
    }

    let resultado
    try {
        resultado=await usuariosModelo.updateOne({deleted:false, _id:id},req.body)
        // resultado=await usuariosModelo.updateOne({deleted:false, _id:id},{$set:{codigo:'999'}, $inc:{edad:5}})
        console.log(resultado)
        if(resultado.modifiedCount>0){
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:"Modificacion realizada"});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se concretó la modificación`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})

    }


})


router.delete('/:id',async(req,res)=>{
    let {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido...!!!`})
    }

    let existe
    try {
        existe=await usuariosModelo.findOne({deleted:false, _id:id}) 
        console.log(existe)
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})
    }

    if(!existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con id ${id}`})
    }


    let resultado
    try {
        resultado=await usuariosModelo.updateOne({deleted:false, _id:id},{$set:{deleted:true}})
        // resultado=await usuariosModelo.deleteOne({_id: id})
        console.log(resultado)
        if(resultado.deletedCount>0){
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:"Eliminacion realizada"});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se concretó la eliminacion`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle: error.message})

    }


})