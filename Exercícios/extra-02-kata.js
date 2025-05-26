/**
 *  Hands-on
 * 
 * Retorne o número de vogais no texto fornecido. 
 * Consideraremos a, e, i, o e u como vogais para este Kata
 * O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
 * Letras acentuadas não fazem parte desse desafio.
 */

function quantidadeVogais(nome) {
    nome = nome.toLowerCase();
    var numeroVogais = 0
    for(let i = 0; i < nome.length; i++)
        if(nome[i] === 'a' || nome[i] === 'e' || nome[i] === 'i' || nome[i] === 'o' || nome[i] === 'u')
            numeroVogais++
    return numeroVogais
}

const nomeComum = "Taina"
const nomeComAcento = "Tainã"
const nomeComEspaco = "Aloy e Axel"
const nomeMaiusculo = "AXEL"
const nomeVazio = ""
const nomeApenasEspaco = " "
const nomeCaractereEspecial = "Ax3l & Ál0y"

console.log(quantidadeVogais(nomeComum))
console.log(quantidadeVogais(nomeComAcento))
console.log(quantidadeVogais(nomeComEspaco))
console.log(quantidadeVogais(nomeMaiusculo))
console.log(quantidadeVogais(nomeVazio))
console.log(quantidadeVogais(nomeApenasEspaco))
console.log(quantidadeVogais(nomeCaractereEspecial))