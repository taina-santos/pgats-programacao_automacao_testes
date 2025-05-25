/**
 * escolha (condicional)
 *  caso x: ...
 *  caso y: ...
 *  caso z: ...
 */

const peso = 10

switch(peso){
    case 10:
        console.log('P')
        break
    case 20:
        console.log('M')
        break
    case 30:
        console.log('G')
        break
    default:
        console.log('ND')
        break
}

// Passando switch true, é possível validar condicionais nos cases
const idadeAdocao = 2
const porteDog = 'M'
const idadeDog = 5

switch(true){
    case porteDog === 'P':
        console.log('Adoção permitida pelo porte')
        break
    default:
        switch (true){
            case idadeDog > idadeAdocao:
                console.log('Adoção permitida pela idade')
                break
            default:
                console.log('O cachorro não pode ser adotado')
                break
        }
        break
}