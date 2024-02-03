import { Usuario } from "../DAO/classes/usuarios.dao.js";

const usuariosService=new Usuario()

export const getUsuarios=async(req,res)=>{

    let usuarios=await usuariosService.get()
    if(!usuarios){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarios});
    }
}

export const getUsuarioById=async(req,res)=>{
    let usuario=await usuariosService.getById(req.params.uid)
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuario});
    }
}

export const createUsuario=async(req,res)=>{
    
    // validaciones quedan a cargo del alumno... 
    let nuevoUsuario=await usuariosService.create(req.body)
    if(!nuevoUsuario){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
    }

}