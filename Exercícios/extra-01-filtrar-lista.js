/**
 *  Hands-on
 * 
 * Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
 */

const listaSemString = (lista) => {
    const resultado = []
    for(let i = 0; i < lista.length; i++){
        if(typeof lista.at(i) === 'number')
            resultado.push(lista.at(i))
    }
    return resultado
}

// Lista variada com números e strings
const listaVariada = [1, 4, "Axel", "5", "Aloy", 8 ,5]
console.log(listaSemString(listaVariada))

// Lista apenas com números
const listaApenasNumeros = [1, 45, 67, 5, 20]
console.log(listaSemString(listaApenasNumeros))

// Lista apenas com strings
const listaApenasString = ["Aloy", "Axel", "5", "Maya", "34"]
console.log(listaSemString(listaApenasString))

// Lista vazia
const listaVazia = []
console.log(listaSemString(listaVazia))