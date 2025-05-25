/**
 * Operadores adicionais:
 * -- - decremento: diminui o valor de uma variável
 * ++ - incremento: aumenta o valor de uma variável
 * ? - ternário: usado em condicional de uma linha
 * 
 * No incremento e decremento, a ordem da leitura do valor muda de acordo com o posicionamento do operador
 */

var pesoDog = 10

//incremento e decremento ocorre após a leitura do valor
pesoDog++
console.log(`Peso do dog com incremento ${pesoDog}`)
pesoDog--
console.log(`Peso do dog com decremento ${pesoDog}`)

var pesoTutor = 70
//incremento e decremento ocorre antes da leitura do valor
console.log(`Peso do dog com incremento ${++pesoTutor}`)
console.log(`Peso do dog com decremento ${--pesoTutor}`)

//ternário
// <condição> ? <ação se true> : <ação se false>
console.log(pesoDog <= 10 ? 'pequeno' : 'médio')
//            condição      se          senao

var pesoDogTernario = 25
const porte = pesoDogTernario <= 10 // if
                ? 'pequeno' 
                : pesoDogTernario <= 20 // else if
                ? 'médio'
                : 'grande' // else
console.log(porte)