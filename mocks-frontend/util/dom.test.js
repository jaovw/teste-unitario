import fs from 'fs'
import path from 'path'
import { Window } from 'happy-dom'
import { it, vi } from 'vitest'
import { showError } from './dom'

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
document.write(htmlDocContent)

vi.stubGlobal('document', document)

it('Testando o ambiente emulado',  () => {

    showError('teste')
})