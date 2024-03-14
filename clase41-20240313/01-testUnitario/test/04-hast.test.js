import { createHash, passwordValidation } from "../src/utils/index.js";
import {expect} from "chai"
import {describe, it} from "mocha"

describe("Test funciones de hash", ()=>{

    it("El método createHash, recibe un texto y devuelve el texto encriptado", async()=>{

        let password="Coder"
        let resultado=await createHash(password)

        expect(resultado).not.to.be.equal(password)
        expect(resultado.length).is.greaterThan(15)
        expect(resultado).includes("$2b$")

        const bcryptRegex = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9./]{53}$/
        expect(bcryptRegex.test(resultado)).to.be.true

    })

    it("El metodo passwordValidation recibe un usuario con pass encriptada y una pass en text y las compara...", async()=>{

        let password="123"
        let hash=await createHash(password)
        let usuario={
            password:hash
        }

        let resultado=await passwordValidation(usuario, password)
        let resultadoMal=await passwordValidation(usuario, "1234567")

        expect(resultado).to.be.true
        expect(resultado).to.be.ok
        expect(resultadoMal).to.be.false
        expect(resultadoMal).is.false

    })


})