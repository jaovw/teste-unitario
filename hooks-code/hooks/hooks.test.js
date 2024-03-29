import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
let user

beforeAll(() => {
  user = new User(testEmail)
})
beforeEach(() => {
  user = new User(testEmail)
})

//  PARA REALIZAR TESTES EM PARALELO UTILIZA-SE O CONCURRENT
//  SENDO UTIL EM CASOS DE MUITOS TESTES OU PRIORIZACAO DE UM BLOCO
//  USANDO NO DESCRIBE() O BLOCO INTEIRO RECEBE A PATERNIDADE
/*
describe.concurrent('', () => {
  it('', () => {

  })
  it('', () => {
    
  })
})
*/
it.concurrent('Deve atualizar o email', () => {
  
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('Deve ter a propriedade email', () => {

  expect(user).toHaveProperty('email');
});

it('Deve guardar o valor do email fornecido', () => {

  expect(user.email).toBe(testEmail);
});

it('Deve limpar o email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it('sDeve permanecer a propriedade email apos limpar', () => {

  user.clearEmail();

  expect(user).toHaveProperty('email');
});
