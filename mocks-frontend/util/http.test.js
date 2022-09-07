import { expect, it, vi } from 'vitest'
import { sendDataRequest } from './http'
//  MOKANDO AS REQUISICOES HTTP PARA NAO REALIZA-LAS EM UM CONTEXTO DE TESTE
//  PODENDO SER EM RELACAO A LIB AXIOS, TERIA QUE UTILIZAR O DIRETORIO __mocks__ E CRIAR A FUNCAO
const responseData = {key: 'key'}
//  CRIANDO A MESMA FUNCIONALIDADE DO FETCH
const newFetch = vi.fn((url, options) => {

    return new Promise((resolve, reject) => {

        if(typeof options.body !== 'string'){

            return reject('Not a string')
        }
        const response ={
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(responseData)
                })
            }
        }

        resolve(response)
    })
})

//  METODO PARA MOKAR METODOS/FUNCOES GLOBAIS (FETCH)
vi.stubGlobal('fetch', newFetch)

it('Deve retornar qualquer response valida', async () => {

    const data = {key: 'someKey'}

    const result = await sendDataRequest(data) 

    expect(result).toEqual(responseData)
})

it('Deve converter a data fornecida em JSON antes de enviar a requisicao' , async () => {

    const data = {key: 'someKey'}

    let errorMessage

    try {
        await sendDataRequest(data)
    } catch (error) {
        errorMessage = error
    }

    expect(errorMessage).not.toBe('Not a string')
})