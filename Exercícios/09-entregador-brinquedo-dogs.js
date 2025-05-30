/**
 * Entrgeador de brinquedos para os dogs
 * 
 * Dado que você tenha uma lista de brinquedos com: bola, osso, corda, sino
 * Crie um script que passe pela lista de brinquedos e entregue um por vez
 * Exiba o nome de cada brinquedo que for entregue
 * Use a estrutura de repetição forEach
 * 
 * Extra: transforme a lógica em uma função
 */

function entregarBrinquedo(brinquedos){
    brinquedos.forEach(brinquedo => {
        console.log(`O brinquedo ${brinquedo} foi entregue`)
    });
    console.log(`Não há mais brinquedos para ser entregue`)
}

brinquedos = ['Bola', 'Osso', 'Corda', 'Sino']
entregarBrinquedo(brinquedos)