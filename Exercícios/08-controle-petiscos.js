/**
 * Controle de petiscos
 * 
 * Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito
 * Use a estrutura de repeitção for contado
 * 
 * Exiba:
 * - Cada vez que o petisco for entregue
 * - Quando o dog estiver satisfeito
 * 
 * Extra: transforme a lógica em uma função
 */

function entregarPetiscos(numPetiscos){
    for(var i = 0; i < numPetiscos; i++){
        console.log(`Petisco #${i+1} entregue`)
    }
    console.log(`Todos os petiscos foram entregues, o dog está satisfeito!`)
}

entregarPetiscos(8)