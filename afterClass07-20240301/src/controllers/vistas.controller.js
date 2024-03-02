import { ProductosDAO } from '../dao/productos.dao.js';
const productosService=new ProductosDAO()

export const login=(req,res)=>{
    res.status(200).render("login")
}


export const getProductos=async(req,res)=>{

    let productos=await productosService.get()
    // map a productos, para agregar una propiedad carrito_id
    if(!productos){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }

    res.setHeader('Content-Type','text/html')
    res.status(200).render("productos",{
        productos, 
        usuario:req.user,
        helpers:{
            mayuscula(valor) {return valor.toUpperCase()},
            resaltar(dato) {return `<b>${dato}</b>`},
            carrito() {return `"${req.user.carrito_id}"`}
        }
    })
}