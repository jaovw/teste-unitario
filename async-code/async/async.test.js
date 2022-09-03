import { it, expect, describe } from 'vitest'
import { generateToken } from './async'

describe('generateToken()', () => {

    it('Deve gerar um token', (done) => {

        const emailTeste = 'teste@teste.com'

        generateToken(emailTeste, (err, token) => {

            try {

                expect(token).toBeDefined()
                // expect(token).toBe(3)
                done()

            } catch (error) {

                done(error)
            }
        })
    })
})