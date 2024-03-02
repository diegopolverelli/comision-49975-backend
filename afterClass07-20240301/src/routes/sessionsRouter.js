import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken'
import { passportView } from '../utils.js';
export const router=Router()


// router.get('/registro', passportView, (req,res)=>{})
router.post("/registro", passportView("registro"), (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({usuarioRegistrado:req.user});
})

router.post("/login", passportView("login"), (req,res)=>{

    let token=jwt.sign({...req.user}, "CoderCoder123", {expiresIn:"1h"})

    res.cookie("codercookie", token)
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarioLogueado:req.user});
})