import { Router } from 'express';
import { agregaProductoCarrito, getCarritoById } from '../controllers/carrito.controller.js';
export const router=Router()

let carritos=[
    {
        _id: "e100", 
        productos:[]    // {_id:"algo", cantidad:5}
    }
]

router.get('/:idCarrito', getCarritoById)

router.post("/:idCarrito/producto/:idProducto", agregaProductoCarrito)