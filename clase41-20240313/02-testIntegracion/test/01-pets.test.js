import {expect} from "chai"
import supertest from "supertest"
import {describe, it} from "mocha"
import mongoose from "mongoose"

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

    })
    

})