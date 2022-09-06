import { expect, it } from "vitest";
import { ValidationError } from "./errors";

it('Deve retornar um erro caso uma string vazia ou contendo espcos seja fornecida', () => {

    const inputEmpty = ''
    const inputBlank = '  '

    const validationFn = () => ValidationError(inputEmpty)
    const validationFn1 = () => ValidationError(inputBlank)

    expect(validationFn).toThrow()
    expect(validationFn1).toThrow()
})

it('Deve retornar um erro com a mensagem de erro fornecida', () => {

    const input = ''
    const errorMessage = 'Error'

    const validationFn = () => ValidationError(input, errorMessage)

    expect(validationFn).toThrow(errorMessage)
})