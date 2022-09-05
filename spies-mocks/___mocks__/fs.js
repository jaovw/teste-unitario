//  O DIRRETORIO QUE O VITEST/JEST PROCURA QUANDO CHAMA O METODO MOCK (__mocks__)
//  ARQUIVOS COM O MESMO NOME DO MODULO QUE DESEJA "MOCKAR"
import { vi } from 'vitest'
//   O MODULO PADRAO "FS" RETORNA UMA PROMISE, UTILIZANDO MOCK ISSO NAO ACONTECE MAIS
const promises = {
    writeFile: vi.fn((path, data) => {
        return new Promise((resolve, reject) => {
            resolve()
        })
    })
}
export { promises }

