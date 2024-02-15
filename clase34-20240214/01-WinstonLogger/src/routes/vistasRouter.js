import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{


    res.status(200).render('home')
})

router.get('/heroes',(req,res)=>{

    req.loggerPersonalizado.leve("prueba error leve...!!!")
    req.loggerPersonalizado.medio("prueba error medio...!!!")
    req.loggerPersonalizado.grave("prueba error grave...!!!")

    let heroes
    try {
        heroes=heroesManager.getHeroes()
    } catch (error) {
        req.logger.error(`Error al leer heroes: ${error.message}`)        
    }

    res.status(200).render('heroes', {
        heroes
    })
})