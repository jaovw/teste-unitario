import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('Deve tranformar string numerica em numero', () => {

    const numero = '1'

    const resultado = transformToNumber(numero)

    expect(resultado).toBeTypeOf('number')
})

it('Deve retornar NaN para string nao numericas', () => {

    const input = 'string'

    const resultado = transformToNumber(input)

    expect(resultado).toBeNaN()
})