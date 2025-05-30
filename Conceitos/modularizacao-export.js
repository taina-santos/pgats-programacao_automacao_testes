/**
 * Modularização é tipo criar uma função grande, mas em forma de arquivo, ao invés de function
 * 
 * códigos  função{     modulos{
 *          códigos     funcoes
 *          }           codigos
 *                      }
 * Módulo (exemplo com caso de automação)
 * - dados
 * - funcoesAuxiliares
 * - testes
 * 
 * Módulo ta mais pra conceito de libs/bibliotecas
 * Exemplos: mocha, faker, chance, supertest, etc
 * 
 * Até 2018/2019, era muito usado usar Sintaxe CommonJS
 *  module.exports = {} / require('')
 * 
 * Atualmente, usamos o ESM = Ecmascript Standard Modules *** O FOCO ATUAL É NESSA
 *  export () / import from
 * 
 * VS code - editor
 * Node - v8 é o motor de execução de código js fora do browser
 * NPM - gerenciador de pacotes (Node Package Manager)
 *  init - 
 *      usado para inicializar um projeto npm (forma de exportar/importar módulos ou pacotes)
 *      instalar e executar pacorts do projeto
 *      organizar pacotes que vão pra produção ou somente local
 * install - adicionar um pacote no projeto
 * npx - executar um pacote já instalado (Node Package eXecutor)
 */

function exibirNomePet(nomePet){
    console.log(`O nome do pet é ${nomePet}`)
}

function exibirIdadePet(idadePet){
    console.log(`A idade do pet é ${idadePet}`)
}

// exibirNomePet('Aloy')
// exibirNomePet('Axel')
// exibirNomePet('Maya')

// expor {} / import - usando ESM
export{
    exibirNomePet,
    exibirIdadePet
}