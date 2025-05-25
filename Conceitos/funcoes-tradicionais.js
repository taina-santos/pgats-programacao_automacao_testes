/**
 * Funções nomeadas
 * Funções de seta
 */

// Funções nomeadas
// Função nomeada, com parâmtro e com retorno
function saudacaNomeada(nome){
    return `Olá ${nome}, função nomeada`
}

console.log(saudacaNomeada('Tay'))

// Funções de seta
const saudacaoSeta = (nome) => {
    return `Olá ${nome}, função de seta`
}

console.log(saudacaoSeta("Tay"))

// Função nomeada, com parâmtro e sem retorno
function exibirNomeDog(nome){
    console.log(`Olá doguinho ${nome}`)
}

// Função nomeada, com parâmetro e com retorno
function obterNomeDogFormatado(nome){
    return nome.toUpperCase()
}

function exibirPorteDog(porte = 'ND'){ //se nenhum parâmetro for passado, o retorno será o 'ND'
    console.log(porte)
}

function obterObjetoDog(){
    return {
        nomeDog: 'Axel',
        peso: 7.4
    }
}

function obterListaDog(){
    return [{
        nomeDog: 'Axel',
        peso: 7.4
    },{
        nomeDog: 'Aloy',
        peso: 5.6
    }]
}

exibirNomeDog('Axel')
exibirPorteDog()
exibirPorteDog('Pequeno')
console.log(obterNomeDogFormatado('Aloy e Axel'))
console.log(obterObjetoDog())
console.log(obterListaDog())
