import { it, expect, describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from './validation'

describe('validateStringNotEmpty()', () => {

    it('Deve ocorrer um erro caso seja uma string vazia', () => {

        const input = ''

        const validateFn = () => validateStringNotEmpty(input)

        expect(validateFn).toThrow()
    })
})

describe('validateNumber()', () => {

    it('Deve ocorrer um erro caso seja fornecido NaN', () => {

        const input = NaN

        const validateFn = () => validateNumber(input)

        expect(validateFn).toThrow()
    })
})