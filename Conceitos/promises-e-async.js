/**
 * Mecanismo criado para lidar com código que precisa de tempo para ser executado
 * Chamamos esse mecanismo de promise - uma promessa de que o código retornará determinado valor
 * 
 * Duas formas de trabalhar promise:
 * - Nativa:
 *  new Promise(resolve, reject)
 * 
 * - async await: tenho uma função que será executada async e que eu preciso terminar 
 *                  a execução para usar o retorno dela
 * 
 */

// async é assinatura de que é assíncrono
async function exibirNomeDogFormatadoAsync(nome){
    return nome.toUpperCase()
}

// await - esperar o código ser executado
// vai retornar uma promise, e pode retornar vazio porque pode estar executando
// caso a gente queira esperar o resultado, a gente usa await
console.log(await exibirNomeDogFormatadoAsync('Axel'))