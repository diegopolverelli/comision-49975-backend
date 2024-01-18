import { Router } from 'express';
import { createMascota, getMascotas } from '../controller/mascotas.controller.js';
import * as MascotasController from '../controller/mascotas.controller.js'
export const router=Router()

router.get('/', getMascotas)
// router.get('/', MascotasController.getMascotas)
router.post('/', createMascota)