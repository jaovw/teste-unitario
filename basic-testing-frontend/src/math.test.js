import { expect, it } from 'vitest'
import { add } from './math'

it('Deve somar todos os elementos no array', () => {
    
    const numeros = [4,4]

    const resultado = add(numeros)

    const resultadoEsperado = numeros.reduce(
        (primeiroValor, segundovalor) => primeiroValor + segundovalor, 0
    )
    
    expect(resultado).toBe(resultadoEsperado)
})

it('Deve retornar NaN caso seja inserido um valor nao desejado', () => {

    const input = ['numero', 1]

    const resultado = add(input)

    expect(resultado).toBeNaN()
})

it('Deve resultar na soma de dois arrauys numericos inseridos', () => {
    
    const numeros =  ['2','5']

    const resultado = add(numeros)

    const resultadoEsperado = numeros.reduce(
        (primeiroValor, segundovalor) => +primeiroValor + +segundovalor, 0
    )
    
    expect(resultado).toBe(resultadoEsperado)
})

it('Deve resultar 0 se nenhum numero for inserido', () => {

    const numeros = []

    const resultado = add(numeros)

    expect(resultado).toBe(0)
})

it('Deve retornar um erro caso nao tenha valores inseridos', () => {

    const resultadoAdd = () => {
        add()
    }

    expect(resultadoAdd).toThrow()
    // expect(resultadoAdd).not.toThrow()   OPOSTO DE EXPECT
})

it('Deve retornar um erro caso tenha mais de um argumento alem dos desejado', () => {

    const n1 = 1
    const n2 = 5

    const resultadoAdd = () => {
        add(n1,n2)
    }

    expect(resultadoAdd).toThrow()
})