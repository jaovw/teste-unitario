import { describe, expect, it } from 'vitest'
import { extractPostData } from './posts'

describe('extractPostData()', () => {

    it('Deve extrair o title e content do formulario ', () => {

        const title = 'title'
        const content = 'content'

        const formData = {

            title: title,
            content: content,

            get(identifier){

                return this[identifier]
            }
        }

        const data = extractPostData(formData)

        expect(data.title).toBe(title)
        expect(data.content).toBe(content)
    })
})