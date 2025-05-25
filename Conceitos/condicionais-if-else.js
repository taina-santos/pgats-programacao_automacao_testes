/**
 * condição (se verdade)
 *      ação dentro do if
 * senão se (outra condição)
 *      ação dentro do else if
 * senão
 *      ação dentro do else
 */

if(10 < 5){
    console.log('valor é maior')
} else {
    console.log('valor é menor')
}

const idadeAdocao = 2
const porteDog = 'M'
const idadeDog = 5

if (idadeDog >= idadeAdocao) {
    console.log('Adoção permitida pela idade')
} else if (porteDog === 'P') {
    console.log('Adoção permitida pelo porte')
} else {
    console.log('O cachorro não pode ser adotado')
}
