import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js';
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    

    res.status(200).render('home',{titulo:'Home Page'})
})

router.get('/heroes',(req,res)=>{

    let {detalle}=req.query

    let heroes=heroesManager.getHeroes()

    res.status(200).render('heroes',{
        heroes, detalle, titulo:'Heroes Page'
    })
})