/**
 * para, faça
 * contador; condição; manipulação do contador
 *  executa ação
 */

const quantidadeCalculada = 2

for(var quantidadePetisco = 0; quantidadePetisco < quantidadeCalculada; quantidadePetisco++)
    console.log(`Petisco #${quantidadePetisco+1} do dia`)

const dogs = ['Aloy', 'Axel', 'Maya']

for(var indice = 0; indice < dogs.length; indice++)
    console.log(`Dando petisco para ${dogs[indice]}`)

for(var indice = 0; indice < dogs.length; indice++)
    for(var quantidadePetisco = 0; quantidadePetisco < quantidadeCalculada; quantidadePetisco++)
        console.log(`Petisco #${quantidadePetisco+1} do dia para ${dogs[indice]}`)