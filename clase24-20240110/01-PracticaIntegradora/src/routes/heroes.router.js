import { MiRouter } from "./router.js";

let heroes=[{name:"Batman", id:1}, {name:"Flash", id:2}]

export class HeroesRouter extends MiRouter{

    init(){
        this.post("/", ["ADMIN"], (req,res)=>{
            let {name}=req.body
            if(!name){
                // res.setHeader('Content-Type','application/json');
                // return res.status(400).json({error:`Ingrese name`})
                return res.errorCliente("Ingrese prop. name")
            }

            let existe=heroes.find(h=>h.name===name)
            if(existe){
                // res.setHeader('Content-Type','application/json');
                // return res.status(400).json({error:`Ya existe el heroe con name ${name}`})
                return res.errorCliente(`Ya existe el heroe con name ${name}`)
            }

            let id=1
            if(heroes.length>0){
                id=heroes[heroes.length-1].id + 1
            }

            let heroeNuevo={name, id}
            heroes.push(heroeNuevo)

            // res.setHeader('Content-Type','application/json');
            // return res.status(200).json({heroeNuevo});
            return res.successAlta("Alta correcta", heroeNuevo)
        })

        this.get("/", ["ADMIN", "USUARIO"], (req,res,next)=>{
            console.log("Middleware de prueba...!!!")
            next()
        }, (req, res)=>{

            // res.setHeader('Content-Type','application/json');
            // return res.status(200).json({heroes});
            return res.success(heroes)
        })

        
        this.get("/error", ["ADMIN"], (req, res)=>{

            console("HOLA")

            // res.setHeader('Content-Type','application/json');
            // return res.status(200).json({heroes});
            return res.success("error...!!!")
        })

        this.get("/:id", ["ADMIN", "USUARIO"], (req, res)=>{

            let {id}=req.params
            id=Number(id)
            if(isNaN(id)){
                // res.setHeader('Content-Type','application/json');
                // return res.status(400).json({error:`Ingrese un id numerico`})

                return res.errorCliente("Ingrese id numérico...!!!")
            }

            let heroe=heroes.find(h=>h.id===id)
            if(!heroe){
                // res.setHeader('Content-Type','application/json');
                // return res.status(400).json({error:`No existe el heroe con id ${id}`})
                return res.errorCliente(`No existe el heroe con id ${id}`)
            }

            // res.setHeader('Content-Type','application/json');
            // return res.status(200).json({heroe});
            return res.success(heroe)
        })
    }

}