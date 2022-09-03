import { describe, expect, it, vi } from 'vitest'
import { generateReportData } from './data'

describe('generateReportData()', () => {

    it('Deve executar logFn quando recebido', () => {

        //  METODO PARA NAO EXECUTAR A FUNCIONALIDADE, NESSE CASO NAO FICAR CRIANDO NOVOS ARQUIVOS 
        const logger = vi.fn()  //  SPIES

        generateReportData(logger)

        expect(logger).toBeCalled()
        // expect(logger).toHaveBeenCalled()

    })
})