import { describe, expect, it, vi } from 'vitest'
import { promises as fs } from 'fs'
import writeData from './io'

vi.mock('fs')
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
})

describe('fs.writeData()', () => {

    it('Deve executar o metodo fs.writeFile()', () => {

        const testData = 'Test'
        const testFileName = 'teste.txt'
    
        writeData(testData, testFileName)
        // return expect(writeData(testData, testFileName)).resolves.toBeUndefined()
        // expect(fs.writeFile).toBeCalled()
    
        expect(fs.writeFile).toBeCalledWith(testFileName, testData)
    })
    
    it('Deve retornar uma promise', async () => {
    
        const testData = 'Test'
        const testFileName = 'teste.txt'
    
        const result = await writeData(testData, testFileName)

        expect(result).toBeUndefined()
    })

})
