export const sc03:string="funciones"
import { PersonajesStarWars } from "./interfaces/starWarsPersonajes.interface"

const suma=(a:number, b:number):string=>`${a+b}`

const imprimeDatos=<T,U>(dato01:T, dato02:U):U=>{
    console.log(dato01)
    console.log(dato02)

    return dato02
}

imprimeDatos<number, boolean>(2, false)
imprimeDatos<string, number>("Carlitos", 1998)
imprimeDatos<string[], boolean>(["Carlitos","Juan"], false)


const leeApi=async<T>(url:string)=>{
    let rta=await fetch(url)
    let datos=await rta.json()

    return datos as T

}

leeApi<PersonajesStarWars>("https://swapi.dev/api/people")
    .then(dato=>{
        dato.results[0].name

        dato.results.forEach(p=>console.log(p.name.toUpperCase()))
    })