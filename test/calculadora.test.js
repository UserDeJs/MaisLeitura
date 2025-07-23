// @ts-check
const calculadora = require("../models/calculadora")

test("Soma de 2 + 2 deve retornar 4",function(){
    const resultado = calculadora.adicão(2,2)
    expect(resultado).toBe(4)
})

test("Soma de 2 + 4 deve retornar 6",function(){
    const resultado = calculadora.adicão(2,4)
    expect(resultado) . toBe (6)
})