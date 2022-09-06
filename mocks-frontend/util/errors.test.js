import { describe, expect, it, test } from 'vitest'
import { HttpError, ValidationError } from './errors'

describe('Class HttpError', () => {

    it('Deve conter dentro da class o status code, message e data', () => {

        const testStatus = 1
        const testMessage = 'message'
        const testData = {key: 'data'}

        const testError = new HttpError(testStatus, testMessage, testData)

        expect(testError.statusCode).toBe(testStatus)
        expect(testError.message).toBe(testMessage)
        expect(testError.data).toBe(testData)
    })

})

describe('Class ValidationError', () => {

    it('Deve conter a mensagem fornecida', () => {

        const testMessage = 'message'

        const testError = new ValidationError(testMessage)

        expect(testError.message).toBe(testMessage)
    })
})