/**
 * Operadores:
 * Serve para operações aritméticas, comparação ou lógicas
 * 
 * -- Comparação
 * > - valor a MAIOR QUE valor b
 * < - valor a MENOR QUE valor b
 * >= - valor a MAIOR OU IGUAL QUE valor b
 * <= - valor a MENOR OU IGUAL QUE valor b
 * == - compara o valor, variavel a 'possui o mesmo valor que' variável b
 * === - compara valor e tipo, variavel b 'possui o mesmo valor e tipo que' variável b
 * != - diferença entre o valor, variável a 'possui valor diferente que' variável b
 * !== - diferença entre valor e tipo, variavel b 'possui valor e tipo diferentes que' variável b
 * 
 * obs:
 * = - atribuição, variavel a 'recebe o valor' valor b
 */

// maior
console.log(`10 > 5 - ${ 10 > 5 }`) // true
console.log(`5 > 10 - ${ 5 > 10 }`) // false

// maior ou igual
console.log(`10 >= 10 - ${ 10 >= 10 }`) // true
console.log(`10 >= 9 - ${ 10 >= 9 }`) // true

// menor
console.log(`5 < 10 - ${5 < 10}`) // true
console.log(`10 < 5 - ${10 < 5}`) // false

// menor ou igual
console.log(`5 <= 5 - ${5 <= 5}`) // true
console.log(`5 <= 10 - ${5 <= 10}`) // true

// igualdade entre valores
console.log(`3 == '3' - ${3 == '3'}`) // true
console.log((`true == 'true' - ${true == 'true'}`)) // false
console.log((`'true' == true - ${'true' == true}`)) // false
console.log(`true == 1 - ${ true == 1 }`) // true
console.log(`false == 1 - ${ false == 1 }`) // false
console.log(`null == undefined - ${ null == undefined }`) // true
console.log(`'' == 0 - ${ '' == 0 }`) // true

// igualdade entre valores e tipo
console.log(`3 == '3' - ${3 === '3'}`) // false
console.log(`true === 1 - ${ true === 1 }`) // false
console.log(`false === 1 - ${ false === 1 }`) // false
console.log(`null == undefined - ${ null === undefined }`) // false

// diferença de valores
console.log(`1 != 2 - ${1 != 2}`) // true
console.log(`1 !== 2 - ${3 !== 2}`) // true