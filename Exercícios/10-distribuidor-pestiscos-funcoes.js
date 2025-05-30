/**
 * Distribuidor de pestiscos
 * 
 * Você tem uma lista de cães: Axel, Aloy e Maya
 * Crie um script que entregue 1 petisco
 * Exiba uma mensagem como: "Entregando petisco para Axel"
 * 
 * Mantenha os dados e a função em arquivos separados; use modularização para organizar
 */

// Arquivo onde criaremos as funções e importaremos os dados para serem usados
import { DOGS } from "./10-distribuidor-petiscos-dados.js";

function entregarPetisco(doguinhos) {
    doguinhos.forEach(dog => {
        console.log(`Entregando petisco para ${dog}`)
    });
}

entregarPetisco(DOGS)