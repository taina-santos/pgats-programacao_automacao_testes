/**
 * Funções nomeadas
 */

// Função nomeada, com parâmtro e com retorno
function saudacaNomeada(nome){
    return `Olá ${nome}, função nomeada`
}

console.log(saudacaNomeada('Tay'))

// Função nomeada, com parâmtro e sem retorno
function exibirNomeDog(nome){
    console.log(`Olá doguinho ${nome}`)
}

// Função nomeada, com parâmetro e com retorno
function obterNomeDogFormatado(nome){
    return nome.toUpperCase()
}

// Função nomeada, com parâmetro + valor default, sem retorno
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

function obterNomesDog(){
    return ['Aloy', 'Axel', 'Maya']
}

exibirNomeDog('Axel')
exibirPorteDog()
exibirPorteDog('Pequeno')
console.log(obterNomeDogFormatado('Aloy e Axel'))
console.log(obterObjetoDog())
console.log(obterListaDog())
console.log(obterNomesDog())
console.log(obterNomesDog().at(1)) // pegando o segundo objeto da lista
