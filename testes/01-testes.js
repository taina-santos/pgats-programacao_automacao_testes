/**
 * Estruturas mais utilizadas no mocha:
 * 
 * describe -> agrupador de testes, recebe o título do teste e uma função com os testes
 * it -> implementação do teste
 * 
 * TDD
 *  crio o teste
 *  vejo o teste falhar
 *  crio a implementação para o teste passar
 *  rodo o teste de novo
 *  refatoro o código para melhorar ...
 * 
 * Assertion
 *  verificar se um comportamento está de acordo com o esperado
 */

import { exibirNomeDogFormatado } from "../Conceitos/testes-de-unidade.js"
import assert from 'node:assert'

describe('Teste do projeto', () => {
    it('Deve exibir o nome do dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Axel'), 'AXEL')
        // verifique se: <valor atual> É IGUAL A <valor esperado>
    })

    it('primeiro teste', () => {

    })

    it('segundo teste', () => {
        // throw new Error("erro");
    })
})