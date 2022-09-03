import { it, expect, describe } from 'vitest'
import { generateToken, generateTokenPromise } from './async'

describe('generateToken()', () => {

    //  CALLBACK
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

describe('generateTokenPromise()', () => {

     //  PROMISES
     it('Deve gerar um token', () => {

        const emailTeste = 'teste@teste.com'

        expect(generateTokenPromise(emailTeste)).resolves.toBeDefined()
    })

    
})