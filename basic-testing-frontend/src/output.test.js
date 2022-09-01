import { describe, it, expect } from 'vitest'
import { generateResultText } from './output.js'

describe('generateResultText()', () => {
    it('Deve retornar uma string de qualquer forma', () => {

        const valor1 = 1
        const valor2 = 'ffff'
        const valor3 = false

        const resultado1 = generateResultText(valor1)
        const resultado2 = generateResultText(valor2)
        const resultado3 = generateResultText(valor3)

        expect(resultado1).toBeTypeOf('string')
        expect(resultado2).toBeTypeOf('string')
        expect(resultado3).toBeTypeOf('string')
    })

    it('Deve retornar uma string caso o resultado seja numerico', () => {

        const resultado = 5

        const resultadoTexto = generateResultText(resultado)

        expect(resultadoTexto).toContain(resultado.toString())
    })
})