import {expect} from "chai"
import supertest from "supertest"
import {describe, it} from "mocha"
import mongoose from "mongoose"
import fs from "fs"

await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase40')

const requester=supertest("http://localhost:8080")

describe("Prueba proyecto AdoptMe", async function(){

    this.timeout(5000)

    describe("Pruebas modulo de pets", async function(){

        after(async()=>{
            let resultado=await mongoose.connection.collection("pets").deleteMany({specie:"TESTING"})
            // console.log(resultado)
        })

        it("La ruta /api/pets, en su metodo POST, permite crear una mascota",async()=>{

            let mascota={name:"Suertudo",specie:"TESTING",birthDate:"2000-03-03"}

            // let resultado=await requester.post("/api/pets").send(mascota)
            // console.log(resultado)
            let {statusCode, body, ok}=await requester.post("/api/pets").send(mascota)

            expect(statusCode).to.be.equal(200)
            expect(ok).to.be.true
            expect(body.payload._id).to.exist
            expect(body.status).to.exist.and.to.be.equal("success")

        })

        it("La ruta /api/pets, en su metodo POST, si me faltan datos en el body, retorna error",async()=>{

            let mascota={specie:"TESTING"}

            // let resultado=await requester.post("/api/pets").send(mascota)
            // console.log(resultado)
            let {statusCode, body}=await requester.post("/api/pets").send(mascota)

            expect(statusCode).to.be.equal(400)  //400
            expect(body.error).to.exist.and.to.be.equal("Incomplete values")

        })

        it("La ruta /api/pets, método DELETE, permite eliminar unas mascota previamente creada", async function(){

            let mascota={name:"Pablito",specie:"TESTING",birthDate:"2000-03-03"}

            let {body:bodyCreate}=await requester.post("/api/pets").send(mascota)
            expect(bodyCreate.payload._id).to.exist
            let idMascota=bodyCreate.payload._id
            let bd=await mongoose.connection.collection("pets").findOne({name:mascota.name, specie:mascota.specie})
            console.log(bd)

            let {body, statusCode}=await requester.delete("/api/pets/"+idMascota)

            bd=await mongoose.connection.collection("pets").findOne({name:mascota.name, specie:mascota.specie})
            console.log(bd)

            expect(statusCode).to.be.equal(200)
            expect(body.message).to.exist.and.to.be.eq("pet deleted")
            expect(bd).is.null
            
        })


    }) // fin describe pets
    

    describe("Prueba uploads de archivos", async function(){

        after(async()=>{
            let resultado=await mongoose.connection.collection("pets").deleteMany({specie:"TESTING"})
            // console.log(resultado)
        })

        it("La ruta /api/pets/withimage permite subir una imagen, con su metodo POST", async function(){

            let mascota={name:"Huesos",specie:"TESTING",birthDate:"2000-03-03"}

            let {body, statusCode} =await requester.post("/api/pets/withImage")
                    .field("name", mascota.name)
                    .field("specie", mascota.specie)
                    .field("birthDate", mascota.birthDate)
                    .attach("image", "./test/img-huesos.jpeg")

            expect(statusCode).to.be.eq(200)
            expect(body.payload._id).to.exist
            expect(body.payload.image).to.exist
            expect(fs.existsSync(body.payload.image)).to.be.true
            fs.unlinkSync(body.payload.image)

        })

    }) //describe images

    describe("Pruebas sessions", async function(){

        after(async()=>{
            let resultado=await mongoose.connection.collection("users").deleteMany({email:"diegolopez@test.com"})
            // console.log(resultado)
        })

        let cookie

        it("La ruta /api/sessions/register, metodo POST, crea un usuario", async()=>{
            let usuario={first_name:"Diego", last_name:"Lopez", email:"diegolopez@test.com", password:"123"}

            let {body, statusCode} = await requester.post("/api/sessions/register").send(usuario)

            expect(statusCode).to.be.equal(200)
            expect(body.payload).to.exist

        })

        it("La ruta /api/sessions/login, permite loguear al usuario, y genera una cookie", async ()=>{
            let usuario={email:"diegolopez@test.com", password:"123"}

            let {body, statusCode, headers} = await requester.post("/api/sessions/login").send(usuario)
            
            // console.log(headers["set-cookie"])
            cookie=headers["set-cookie"][0]
            let dato=headers["set-cookie"][0].split("=")
            let nombreCookie=dato[0]
            let valorCookie=dato[1]
            // console.log({nombreCookie, valorCookie})

            expect(nombreCookie).to.be.equal("coderCookie")
            expect(body.message).to.be.equal("Logged in")

        })

        it("El endpoint /api/sessions/current recibe y lee la cookie", async function(){
            let {body}=await requester.get("/api/sessions/current")
                 .set("Cookie", cookie)
                 .set("Authorization", "Bearer Token...!!!!")
                 .query({nombre: "Marcos"})
                 .query({edad: 22})

            expect(body.payload.email).to.exist.and.to.be.equal("diegolopez@test.com")

        })

    })

}) // fin de describe gral AdoptMe