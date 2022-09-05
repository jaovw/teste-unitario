import { expect, it, vi } from 'vitest'
import { promises as fs } from 'fs'
import writeData from './io'

vi.mock('fs')

it('Deve executar o metodo fs,writeFile()', () => {

    const testData = 'Test'
    const testFileName = 'teste.txt'

    writeData(testData, testFileName)
    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined()

    expect(fs.writeFile).toBeCalled()
})