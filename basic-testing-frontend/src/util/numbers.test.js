import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('Deve tranformar string numerica em numero', () => {

    const numero = '1'

    const resultado = transformToNumber(numero)

    // expect(resultado).toBeTypeOf('number')
    expect(resultado).toBe(1)
})

it('Deve retornar NaN para string nao numericas', () => {

    const input = 'string'
    const input2 = {}

    const resultado = transformToNumber(input)
    const resultado2 = transformToNumber(input2)

    expect(resultado).toBeNaN()
    expect(resultado2).toBeNaN()
})