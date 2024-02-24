import { Router } from 'express';
import passport from 'passport';
import { passportView } from '../utils.js';
export const router=Router()


// router.get('/registro', passportView, (req,res)=>{})
router.post("/registro", passportView("registro"), (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({usuarioRegistrado:req.user});
})