import { Router } from 'express';
export const router=Router()
import HeroesManager from '../manager/HeroesManager.js'

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    let heroes=heroesManager.getHeroes()

    res.status(200).json({heroes})
})