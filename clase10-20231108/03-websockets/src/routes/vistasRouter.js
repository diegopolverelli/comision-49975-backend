import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{


    res.status(200).render('home')
})

router.get('/websockets',(req,res)=>{


    res.status(200).render('websocket')
})


router.get('/heroes',(req,res)=>{

    let heroes=heroesManager.getHeroes()

    res.status(200).render('heroes', {
        heroes
    })
})