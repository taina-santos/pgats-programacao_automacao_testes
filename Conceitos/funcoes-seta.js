/**
 * Funções de seta
 * Aqui vamos refatorar todas as funções nomeadas para funções de seta
 */

// Funções de seta
const saudacaoSeta = (nome) => {
    return `Olá ${nome}, função de seta`
}

console.log(saudacaoSeta("Tay"))

/**
 * É possível reescrever a função de seta acima sem chaves e com retorno implícito, 
 */
const saudacaoSetaSemChaves = nome => `Olá ${nome}, função de seta sem chaves e com retorno implícito`;
console.log(saudacaoSetaSemChaves('Tay'))

// Função de seta, com parâmtro e sem retorno
const exibirNomeDoDog = (nome) => {
    //console.log(`Olá doguinho ${nome}`)
    return `Olá doguinho ${nome}`
}


// Função de seta, com parâmetro e com retorno
const nomeDogFormatado = (nome) => {
    return nome.toUpperCase()
}

// Função de seta, com parâmetro + valor default, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
    //console.log(porte)
    return porte
}

// Função de seta, sem parâmtro e com retorno de objeto
const obterObjetoDog = () => {
    return {
        nomeDog: 'Axel',
        peso: 7.4
    }
}

const obterListaDog = () => {
    return [{
        nomeDog: 'Axel',
        peso: 7.4
    },{
        nomeDog: 'Aloy',
        peso: 5.6
    }]
}

const obterNomesDog = () => {
    return ['Aloy', 'Axel', 'Maya']
}

console.log(exibirNomeDoDog('Axel'))
console.log(exibirPorteDoDog())
console.log(exibirPorteDoDog('Pequeno'))
console.log(nomeDogFormatado('Aloy e Axel'))
console.log(obterObjetoDog())
console.log(obterListaDog())
console.log(obterNomesDog())
console.log(obterNomesDog().at(1)) // pegando o segundo objeto da lista
