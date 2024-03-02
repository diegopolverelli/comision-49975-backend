import { Router } from 'express';
import { getProductos, login } from '../controllers/vistas.controller.js';
import { passportView } from '../utils.js';
export const router=Router()


router.get('/productos', passportView("jwt"), getProductos)
router.get("/login", login)