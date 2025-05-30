/**
 * Exceções
 * "try ... catch" e throw
 * 
 * - try ... catch ... finally
 * tentar {
 *  conexao com banco
 * } pegar (erro/exceção) {
 *  salvar a exceção
 *  exibir
 * }
 * 
 * usado para que a execução não seja interrompida
 * 
 * - throw
 * usado para lançar um erro específico
 */

try {
    console.log(`Tentando alimentar o pet...`)
    // throw new Error("pet não quis ser alimentado");

    // tentar conectar ao banco
    // executar uma query
} catch (error) {
    // console.log(error)
    console.log(error.name)
    console.log(error.message)
    
    // capturar a exceção
} finally {
    console.log(`Sempre serei executado mwahaha`)
    
    // fechar a conexão com o banco (ao menos garantir que foi fechado)
}