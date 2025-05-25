/**
 * Validador de idade mínima para adoção
 * 
 * Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
 * Use os operadores adequados e exiba:
 *      Nome do dog
 *      Idade
 *      Se está apto ou não para adoção
 * Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade.
 * 
 * idade 1 + porte M = nao
 * idade 2 + porte M = sim, pela idade
 * idade 2 + porte P = sim, pela idade
 * idade 1 + porte P = sim, pelo porte
*/

const idadeMininaAdocao = 2 // idade mínima para adoção de um ano

const adocaoPossivel = ([{ // idade 2 + porte P = sim, pela idade
    nome: 'Aloy',
    porteDog: 'P',
    idadeDog: 10,
    disponivelAdocao: disponivelAdocao(10, 'P')
},{ // idade 2 + porte M = sim, pela idade
    nome: 'Maya',
    porteDog: 'M',
    idadeDog: 6,
    disponivelAdocao: disponivelAdocao(6, 'M')
},{ // idade 1 + porte P = sim, pelo porte
    nome: 'Axel',
    porteDog: 'P',
    idadeDog: 1,
    disponivelAdocao: disponivelAdocao(1, 'P')
},{ // idade 1 + porte M = nao
    nome: 'Ellie',
    porteDog: 'M',
    idadeDog: 1,
    disponivelAdocao: disponivelAdocao(1, 'M')
}])

console.table(adocaoPossivel)

function disponivelAdocao(idadeDog, porteDog){
    var disponibilidadePorIdade = idadeDog > idadeMininaAdocao ? 'Adoção permitida pela idade' : 'O cachorro é muito novinho, tente depois'
    return porteDog === 'P' ? 'Adoção permitida pelo porte' : disponibilidadePorIdade
}