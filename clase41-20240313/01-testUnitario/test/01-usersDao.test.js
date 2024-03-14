import Users from "../src/dao/Users.dao.js";
import mongoose from "mongoose";

import Assert from "assert"

import {describe, it} from "mocha"

await mongoose.connect('mongodb+srv://backend49975:CoderCoder@cluster0.dxc9fdl.mongodb.net/?retryWrites=true&w=majority&dbName=clase40')

const assert=Assert.strict

describe("Test DAO usuarios c/assert", function(){

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

        assert.equal(Array.isArray(resultado), true)
        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0]._id)
            assert.ok(resultado[0].email)
        }

    })    

    it("El dao permite grabar un usuario en DB, con su método save", async function(){
        let userTest={
            first_name:"Juan", last_name:"Lopez", email:"jlopez@test.com", password:"123"
        }

        let resultado=await this.usersDao.save(userTest)

        assert.ok(resultado._id)
        assert.ok(resultado.email)
        assert.equal(resultado.email, "jlopez@test.com")
        assert.equal(typeof resultado._id, "object")

    })    

    it("El dao permite grabar un usuario en DB, con su método save, y genera una prop pets igual a un array vacío", async function(){
        let userTest={
            first_name:"Juan", last_name:"Lopez", email:"jlopez@test.com", password:"123"
        }

        let resultado=await this.usersDao.save(userTest)

        assert.ok(resultado.pets)
        assert.equal(Array.isArray(resultado.pets), true)

    }) 
    
})

