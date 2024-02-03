import { Negocio } from "../DAO/classes/negocios.dao.js";

const negociosService=new Negocio()

export const getNegocios=async(req, res)=>{
    let negocios=await negociosService.get()
    if(!negocios){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({negocios});
    }
}

export const getNegocioById=async(req, res)=>{
    let negocio=await negociosService.getById(req.params.nid)
    if(!negocio){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({negocio});
    }
}

export const createNegocio=async(req,res)=>{

    // validaciones quedan para los alumnos, o para el afterClass...
    let nuevoNegocio=await negociosService.create(req.body)
    if(!nuevoNegocio){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoNegocio});
    }

}

export const addProducto=async(req,res)=>{
    // validaciones quedan para los alumnos, o para el afterClass...
    let producto=req.body
    let id=req.params.nid
    let negocio=await negociosService.getById(id)
    negocio.productos.push(producto)
    let resultado=await negociosService.update(id, negocio)
    if(!resultado){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:"Producto agregado...!!!"});
    }
}