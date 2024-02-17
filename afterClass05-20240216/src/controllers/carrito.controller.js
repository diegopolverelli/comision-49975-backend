import { CarritoDAO } from "../dao/carrito.dao.js";

const carritoService=new CarritoDAO()

export const getCarritoById=async(req,res)=>{

    let {idCarrito}=req.params

    // llamar al dao.findById...
    let carrito=await carritoService.getById(idCarrito)
    // let carrito=carritos.find(c=>c._id===req.params.idCarrito)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({carrito})
}

export const agregaProductoCarrito=async(req, res)=>{

    let {idCarrito, idProducto}=req.params

    // llamar al dao.findById...
    let carrito=await carritoService.getById(idCarrito)
    // let indiceCarrito=carritos.findIndex(c=>c._id===idCarrito)
    if(!carrito){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
    }

    let indiceProducto=carrito.productos.findIndex(p=>p.producto._id==idProducto)
    // let indiceProducto=carrito.productos.findIndex(p=>{

    //     console.log(p)
    //     console.log(p.producto)
    //     console.log(idProducto)

    //     return p.producto===idProducto
    // })


    if(indiceProducto!==-1){
        // carritos[indiceCarrito].productos[indiceProducto].cantidad++
        carrito.productos[indiceProducto].cantidad++
    }else{
        carrito.productos.push({producto:idProducto, cantidad:1})
    }

    await carritoService.update(idCarrito, carrito)
    carrito=await carritoService.getById(idCarrito)

    res.setHeader('Content-Type','application/json');
    // return res.status(200).json({carritoActualizado:carritos[indiceCarrito]});
    return res.status(200).json({carritoActualizado:carrito});

}