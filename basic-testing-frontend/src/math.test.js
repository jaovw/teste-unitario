import { expect, it } from 'vitest'
import { add } from './math'

it('somar todos os elementos no array', () => {
    
    const numeros = [4,4]

    const resultado = add(numeros)

    const resultadoEsperado = numeros.reduce(
        (primeiroValor, segundovalor) => primeiroValor + segundovalor, 0
    )
    
    expect(resultado).toBe(resultadoEsperado)
})

