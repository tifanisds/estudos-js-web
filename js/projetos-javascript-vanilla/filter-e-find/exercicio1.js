/*
Use o array de números numeros = [12, 5, 8, 130, 44, 2] para os exercícios:

filter()
Números Pares: Crie um novo array contendo apenas os números pares.

Números Maiores que 10: Crie um novo array contendo apenas os números que são estritamente maiores que 10.

find()
Primeiro Número Ímpar: Encontre e retorne o primeiro número ímpar no array.

Primeiro Múltiplo de 4: Encontre e retorne o primeiro número que seja divisível por 4 (múltiplo de 4).
*/

const numeros = [12, 5, 8, 130, 44, 2]

let numerosPares = numeros.filter(numero => {
    return numero % 2 == 0
})

let numerosMaioresDeDez = numeros.filter(numero => {
  return numero > 10
})

let numeroImpar = numeros.find(numero => {
  return numero % 2 != 0
})

let numeroMultiploDeQuatro = numeros.find(numero => {
  return numero % 4 == 0
})

console.log(numerosPares)
console.log(numerosMaioresDeDez)
console.log(numeroImpar)
console.log(numeroMultiploDeQuatro)