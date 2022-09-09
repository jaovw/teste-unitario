import fs from 'fs'
import path from 'path'
import { Window } from 'happy-dom'
import { beforeEach, expect, it, vi } from 'vitest'
import { showError } from './dom'

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
//  NECESSARIA A CRIACAO DO ELEMENTO ANTES DE CADA TESTE
//  AO CRIAR UM DOCUMENTO E EM SEGUIDA ELEMENTOS, O CONTEUDO PERSISTE PARA OS DEMAIS TESTES
beforeEach(() => {

    document.body.innerHTML = ''    // PARA TER CERTEZA DA CRIACAO DO DOCUMENTO EM BRANCO
    document.write(htmlDocContent)
})

vi.stubGlobal('document', document)

it('Deve adicionar um paragrafo de erro nos elementos de id "errors"',  () => {

    showError('teste')

    const errorsElement = document.getElementById('errors')
    const errorParagraph = errorsElement.firstElementChild

    expect(errorParagraph).not.toBeNull()

})

it('Nao deve conter um paragrafo de erro inicial', () => {

    const errorsElement = document.getElementById('errors')
    const errorParagraph = errorsElement.firstElementChild

    expect(errorParagraph).toBeNull()    
})

it('Deve ter como conteudo no paragrafo a mensagem de erro fornecida', () => {

    const errorMessage = 'Mensagem Teste'

    showError(errorMessage)

    const errorsElement = document.getElementById('errors')
    const errorParagraph = errorsElement.firstElementChild

    expect(errorParagraph.textContent).toBe(errorMessage)
})