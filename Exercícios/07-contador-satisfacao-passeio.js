/**
 * Contador de satisfação de passeio
 * 
 * Crie um script que avise quando o dog já passeou o suficiente. 
 * Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.
 * 
 * Use a estrutura de repetição while
 * 
 * Exiba:
 * - Qual o número da volta atual
 * - Quando o dog estiver satisfeito
 * 
 * Extra: transforme a lógica em uma função da forma que conseguir
 */

function darVoltasQuadra(voltasSatisfeito) {
    var voltaAtual = 0
    while(voltaAtual < voltasSatisfeito){
        console.log(`Dog não está satisfeito, dê outra volta, volta ${voltaAtual+1}`)
        voltaAtual++
    }
    console.log(`Voltas suficiente, doguinho está satisfeito`)
}

darVoltasQuadra(5)