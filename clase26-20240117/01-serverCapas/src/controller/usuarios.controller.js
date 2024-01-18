// import { UsuariosMemoryDAO } from "../dao/usuariosMemoryDAO.js"

import { usuariosService } from "../services/usuarios.service.js"

// let dao=new UsuariosMemoryDAO()

export class UsuariosController{
    constructor(){}

    static async getUsuarios(req,res){

        let usuarios=await usuariosService.getUsuarios()

        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    }

    static async createUsuario(req,res){
        let {nombre, email, password}=req.body
        if(!nombre || !email || !password){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Complete los datos`})
        }

        // valide que el usuario no existe
        let existe=await usuariosService.getUsuarioByEmail(email)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`El usuario con email ${email} ya existe en DB`})
        }

        // grabar usuario en DB
        let nuevoUsuario=await usuariosService.createUsuario({nombre, email, password})

        res.setHeader('Content-Type','application/json')
        res.status(200).json({nuevoUsuario})
    }
}