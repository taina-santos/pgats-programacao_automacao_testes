/**
 * For each é perfeito para usar com lista e outras estrutura de dados
 * 
 * para cada item da lista
 *  ação a ser executada
 * 
 */

const listaDogs = ['Aloy', 'Axel', 'Maya']

listaDogs.forEach(dog => {
    console.log(dog)
})

console.log(`-------------`)

const listaDogsxPeso = [
    {
        nome: 'Axel',
        peso: 7.4
    },
    {
        nome: 'Aloy',
        peso: 5.6
    },
    {
        nome: 'Maya',
        peso: 12.3
    }
]

listaDogsxPeso.forEach(dog => {
    console.log(`O dog ${dog.nome} tem o peso ${dog.peso} kg`)
})