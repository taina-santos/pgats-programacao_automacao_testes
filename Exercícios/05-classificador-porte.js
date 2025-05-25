/**
 * Classificador de porte automático
 * Muitos tutores não fazem ideia do porte de seu Dog.
 * Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
 * - Até 10kg -> Pequeno; acima disso -> Médio
 * Use o operador ternário para determinar o porte. Exiba:
 * - Nome
 * - Peso
 * - Porte classificado
 * Extra: transforme a lógica em uma função (da forma que conseguir)
 */

function determinarPorteDog(pesoDog) {
    return pesoDog <= 10 ? 'Pequeno' : 'Médio'
    // return pesoDog <= 10 ? 'Pequeno' : pesoDog < 50 ? 'Médio' : 'Grande' // Caso eu queira adicionar o tamanho 'Grande'
}

function exibirInfoDog(nomeDog, pesoDog) {
    console.log('-------------------------------------------')
    console.log(`Nome: ${nomeDog}`)
    console.log(`Peso: ${pesoDog} kg`)
    console.log(`Porte classificado: ${determinarPorteDog(pesoDog)}`)
    console.log('-------------------------------------------')
}

exibirInfoDog('Aloy', 5.6)
exibirInfoDog('Axel', 7.4)
exibirInfoDog('Maya', 12.5)
exibirInfoDog('Astro', 51)