import Users from "../src/dao/Users.dao.js";
import mongoose from "mongoose";

// import Assert from "assert"
import {expect, should} from "chai"

// import chai from "chai"
// const expect=chai.expect

import {describe, it} from "mocha"
should()

await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase40')

// const assert=Assert.strict

describe("Test DAO usuarios utilizando Chai", function(){

    this.timeout(5000)

    before(function(){
        this.usersDao=new Users()
    })

    beforeEach(async function(){
        // ???
        await mongoose.connection.collection("users").deleteMany({email:"jlopez@test.com"})
    })

    after(async()=>{
        // limpieza BD
        await mongoose.connection.collection("users").deleteMany({email:"jlopez@test.com"})

    })

    it("El dao retorna un array de usuarios al ejecutar su método GET", async function(){
        let resultado=await this.usersDao.get()
        // console.log(resultado)

        // assert.equal(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.equal(true)
        Array.isArray(resultado).should.be.equal(true)
        // expect(Array.isArray(resultado)).is.equal(true)
        expect(Array.isArray(resultado)).is.true
        if(Array.isArray(resultado) && resultado.length>0){
            // assert.ok(resultado[0]._id)
            expect(resultado[0]._id).exist
            resultado[0]._id.should.to.exist
            // assert.ok(resultado[0].email)
            expect(resultado[0].email).exist
            expect(resultado[0]).have.property("email").and.to.includes("@")
            // expect(resultado[0]).have.property("email").and.to.includes("*")  // esta da error... 
            // expect(resultado[0]).have.property("email900")
            expect(Object.keys(resultado[0].toJSON())).includes("email")
            expect(Object.keys(resultado[0].toObject())).includes("_id")
        }

    })    

    it("El dao permite grabar un usuario en DB, con su método save", async function(){
        let userTest={
            first_name:"Juan", last_name:"Lopez", email:"jlopez@test.com", password:"123"
        }

        let resultado=await this.usersDao.save(userTest)

        // assert.ok(resultado._id)
        expect(resultado._id).to.be.ok
        // assert.ok(resultado.email)
        expect(resultado.email).to.be.ok
        // assert.equal(resultado.email, "jlopez@test.com")
        expect(resultado.email).to.be.equal("jlopez@test.com")
        // assert.equal(typeof resultado._id, "object")
        expect(typeof resultado._id).to.be.equal("object")
        let consultaDB=await mongoose.connection.collection("users").findOne({email:"jlopez@test.com"})
        expect(consultaDB._id).to.be.ok
        expect(consultaDB.email).to.be.equal("jlopez@test.com")


    })    



    it("El dao permite grabar un usuario en DB, con su método save, y genera una prop pets igual a un array vacío", async function(){
        let userTest={
            first_name:"Juan", last_name:"Lopez", email:"jlopez@test.com", password:"123"
        }

        let resultado=await this.usersDao.save(userTest)

        // assert.ok(resultado.pets)
        expect(resultado.pets).exist
        // assert.equal(Array.isArray(resultado.pets), true)
        expect(Array.isArray(resultado.pets)).to.be.true
        resultado.pets.should.exists
        resultado.pets.should.be.deep.equal([])
        expect(resultado.pets).to.be.deep.equal([])
        expect(Array.isArray(resultado.pets)).to.be.eq(true)
    }) 
    
})

