const { suma } = require("./suma");

describe("Pruebas a la función suma", ()=>{

    test("Si no envío argumentos a la fn, esta devuelve 0", ()=>{
        expect(suma()).toBe(0)
    })

    test("Si envío argumentos no numéricos, debe devolver null", ()=>{
        expect(suma("juan", 1)).toBe(null)
        expect(suma("juan", 1)).toBeNull()
        expect(suma(true, 5)).toBeNull()
        expect(suma(["juan"], -4)).toBe(null)
    })

    test("Si envío 2 args numéricos, devuelve su suma", ()=>{
        expect(suma(2,2)).toBe(4)
        expect(suma(-2,-2)).toBe(-4)
        expect(suma(1,9999999999999999999999999999998)).toBe(9999999999999999999999999999999)
    })

    test("Si envío n args, devuelve la suma de todos", ()=>{
        expect(suma(1,2,3,4,5)).toBe(15)
    }) 

})
