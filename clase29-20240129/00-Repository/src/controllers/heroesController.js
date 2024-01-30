// import { MemoryHeroesDAO as DAO } from "../dao/memoryHeroesDAO.js"

import { heroesService } from "../repository/heroes.service.js"

// let heroesService=new DAO()

async function getHeroes(req,res){

    // let heroes=await heroesService.get()
    let heroes=await heroesService.getHeroes()

    res.status(200).json({heroes})
}

async function getHeroeByNombre(req,res){

    // let heroes=await heroesService.get()
    let heroes=await heroesService.getHeroeByNombre(req.params.nombre)

    res.status(200).json({heroes})
}

async function getHeroeById(req,res){

    let id=req.params.id
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Indique un id numérico`})
    }

    // let heroes=await heroesService.get()
    let heroes=await heroesService.getHeroeById(id)

    res.status(200).json({heroes})
}

export default {getHeroes, getHeroeByNombre, getHeroeById}