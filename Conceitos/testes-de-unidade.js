/**
 * Testes unitários
 * 
 * Principais bibliotecas de testes de unidades:
 * - mocha: a base do cypress é feito em mocha
 * - jest: implementado pelo facebook, e é usado pelo playwright
 * 
 * Para configurar no seu projeto, rodar na raíz a linha "npm install -D mocha"
 * -D para tornar uma dependência de desenvolvimento
 */

function exibirNomeDogFormatado (nome) {
    return nome.toUpperCase()
}

export {
    exibirNomeDogFormatado
}