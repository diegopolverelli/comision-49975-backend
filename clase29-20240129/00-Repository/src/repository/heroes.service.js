import { HeroesGetDTO } from "../DTO/heroes.DTO.js";
import { MemoryHeroesDAO as DAO} from "../dao/memoryHeroesDAO.js";

class HeroesService{
    constructor(DAO){
        this.dao=DAO
    }

    async getHeroes(){
        let heroes=await this.dao.get()
        heroes=heroes.map(heroe=>new HeroesGetDTO(heroe))
        return heroes
    }

    async getHeroeByNombre(nombre){
        let heroes=await this.dao.get()
        let heroe=heroes.find(heroe=>heroe.name===nombre)
        return new HeroesGetDTO(heroe)
    }

    async getHeroeById(id){
        let heroes=await this.dao.get()
        let heroe=heroes.find(heroe=>heroe.id===id)
        return new HeroesGetDTO(heroe)
    }
}

export const heroesService=new HeroesService(new DAO())