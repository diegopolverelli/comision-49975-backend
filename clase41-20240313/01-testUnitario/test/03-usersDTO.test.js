import UserDTO from "../src/dto/User.dto.js";
import {expect} from "chai"

import {describe, it} from "mocha"

describe("Testing del DTO de usuarios", ()=>{

    it("Si recibo un usuario con datos sensibles, el DTO devuelve solo name (con first_name concatenado a last_name), role... ", ()=>{

        let user={
            first_name:"Juan", last_name:"Perez", password:"123", role:"admin", 
            email:"jperez@test.com", cbu:"23942348023948"
        }

        let resultado=UserDTO.getUserTokenFrom(user)

        expect(resultado.name).exist.and.to.be.eq(user.first_name+" "+user.last_name)
        expect(resultado.password).not.to.be.ok
        expect(resultado).have.property("email").and.to.be.equal(user.email)

    })


} )

