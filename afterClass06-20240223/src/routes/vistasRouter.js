import { Router } from 'express';
import { getProductos } from '../controllers/vistas.controller.js';
export const router=Router()


router.get('/productos', getProductos)