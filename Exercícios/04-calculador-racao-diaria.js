/**
Calculadora de ração diária

Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade diária de ração com base na seguinte fórmula: 

Gramas por dia = Peso x 30 gramas

Exiba:
  Nome do dog
  Peso
  Quantidade de ração recomendada por dia
  Quantos dias o estoque atual vai durar
 
 */

function exibirResultado(nomeDog, pesoDog, estoqueAtual){
    console.log('-------------------------------------------')
    console.log(`Nome: ${nomeDog}`)
    console.log(`Peso: ${pesoDog} kg`)
    console.log(`Quantidade de ração por dia: ${gramasPorDia(pesoDog)} g/dia`)
    console.log(`Duração do estoque: ${parseInt(duracaoEstoque(estoqueAtual, pesoDog))} dias`)
    console.log('-------------------------------------------')
}

function gramasPorDia(pesoDog){
    return pesoDog * 30
}

function duracaoEstoque(estoqueAtual, pesoDog){
    return estoqueAtual / gramasPorDia(pesoDog)
}

exibirResultado('Aloy', 5, 5000)
exibirResultado('Axel', 7, 5000)