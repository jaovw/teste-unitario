import { it, expect, describe } from 'vitest'
import { cleanNumbers, transformToNumber } from './numbers'

describe('transformToNumber()', () => {

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
})

describe('cleanNumbers()', () => {

    it('Deve retornar um array de numeros quando um array de string for fornecido', () =>{

        const input = ['1','2']

        const numerosLimpos = cleanNumbers(input)

        // expect(numerosLimpos[0]).toBeTypeOf('number')
        // expect(numerosLimpos).toBe([1,2])    toBe CHECA IGUALDADE, POR SEREM DIFERENTES OBJETOS OCUPANDO DIFERENTES LOCAIS NA MEMORIA RETORNA UM ERRO
        expect(numerosLimpos).toEqual([1,2])
    })

    it('Deve retornar um erro caso um dos elementos do array seja nulo/vazio', () => {

        const input = ['', 3]

        const numerosLimposFn = () => cleanNumbers(input)

        expect(numerosLimposFn).toThrow
    })
})
