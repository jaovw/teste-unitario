import { validateNumber, validateStringNotEmpty} from './validation.js'

function transformToNumber(value) {
  return +value;
}

function cleanNumbers(numberValues) {

  const numbers = []

  for (const numberImput of numberValues) {

    validateStringNotEmpty(numberImput)

    const number = transformToNumber(numberImput)

    validateNumber(number)

    numbers.push(number)
  }

  return numbers
}

export {cleanNumbers, transformToNumber}