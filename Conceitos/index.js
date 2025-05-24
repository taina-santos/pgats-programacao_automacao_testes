/**
 * Console API
 */

console.log("Log: Aula inicial JS");

console.error("Erro: Falha na execução");

console.warn("Warn: Atenção");

console.table([{
    nome: 'Tay',
    turma: '02',
    desciplina: 'testemunha de JS'
},
{
    nome: 'outro aluno',
    turma: '02',
    desciplina: 'testemunha de JS'
}])

/**
 * Constantes e variáveis
 * 
 * const - para infos que nunca mudam
 * var ou let para informações que pode mudar
*/

// Info de dogs que não mudam
// const deve ser sempre inicializada ao ser declarada

const nome = 'Axel'
const raca = 'chihuaua mix'
const sexo = 'macho'
const cor = 'tricolor'
const dataNascimento = '11/2020'
const porte = 'P'

// Informações que mudam
//
let idade = 4
let peso = 7.5
let vacinado = true
let castrado = true
let tamanho = 'P'

//hoisting -> içamento ou elevação, e é possível com declaração de var, com let não ocorre
//na verdade ocorre, mas é mais "lento"
// console.log(irmaos)
var irmaos = ["Axel","Aloy"]
// esse irmãos é colocado no início, só que não declarada, e retorna undefinied porque a inicialização vem depois
console.table(irmaos)

/**
 * Tipos de dados - string, int, real, logico, vetor, matriz
 * string - cadeia
 * number - inteiro/real
 * boolean - logico
 * array - vetor/matriz
 * 
 * BigInt = number pra numeros grandes
 * Symbol - identificador único
 */

/**
 * Para declarar string, podemos usar aspas simples, aspas duplas ou crase
 * crase é usado para template string, a gente consegue ter mais dinamismo
 */

