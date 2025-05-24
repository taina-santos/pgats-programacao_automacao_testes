/**
 * Operadores:
 * Serve para operações aritméticas, comparação ou lógicas
 * 
 * -- Lógico
 * && = e / E / AND
 * || = ou / OU / OR
 * ! = não / NOT
 * 
 */

// && - E / AND
const nomeDog = "Aloy"
const nomeUnico = nomeDog.split(' ').length === 1
const nomeAte10Char = nomeDog.length <= 10

console.log(nomeAte10Char && nomeUnico)

// || - OU / OR
const dog = ({
    adotado: false,
    peso: 7
})

console.log(!dog.adotado || dog.peso < 10) // true
console.log(dog.adotado || dog.peso < 10) // true
console.log(dog.adotado || dog.peso < 5) // false

// !  - NÃO / NOT
console.log(true) // true
console.log(!true) // false