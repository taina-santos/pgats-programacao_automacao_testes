/**
 * Operadores adicionais:
 * -- - decremento: diminui o valor de uma variável
 * ++ - incremento: aumenta o valor de uma variável
 * ? - ternário
 * 
 * No incremento e decremento, a ordem da leitura do valor muda de acordo com o posicionamento do operador
 */

var pesoDog = 10

//incremento ocorre após a leitura do valor
pesoDog++
console.log(`Peso do dog com incremento ${pesoDog}`)
pesoDog--
console.log(`Peso do dog com decremento ${pesoDog}`)

var pesoTutor = 70
//incremento ocorre antes da leitura do valor
console.log(`Peso do dog com incremento ${++pesoTutor}`)
console.log(`Peso do dog com decremento ${--pesoTutor}`)