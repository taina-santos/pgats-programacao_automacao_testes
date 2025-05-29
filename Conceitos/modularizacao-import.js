/**
 * Usando ESM
 * export{} / import
 * 
 * import {o que queremos} de 'caminho do arquivo'
 */

import {exibirNomePet, exibirIdadePet} from './modularizacao-export.js'

const nomePet = 'Aloy'
exibirNomePet(nomePet)

exibirIdadePet(12)