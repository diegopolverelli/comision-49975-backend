import { Router } from 'express';
import { ProductosDAO } from '../dao/productos.dao.js';
export const router=Router()

const productosService=new ProductosDAO()

router.get('/productos',async(req,res)=>{

    let productos=await productosService.get()
    // map a productos, para agregar una propiedad carrito_id
    if(!productos){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }

    res.setHeader('Content-Type','text/html')
    res.status(200).render("productos",{productos, usuario:req.user})
})