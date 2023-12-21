import { Router } from 'express';
import passport from 'passport';
export const router=Router()

router.get('/github', passport.authenticate('github',{}), (req,res)=>{})

router.get('/callbackGithub', passport.authenticate('github',{failureRedirect:"/api/sessions/errorGithub"}), (req,res)=>{
    
    console.log(req.user)
    req.session.usuario=req.user
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        message:"Acceso OK...!!!", usuario: req.user
    });
});

router.get('/errorGithub',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        error: "Error al autenticar con Github"
    });
});