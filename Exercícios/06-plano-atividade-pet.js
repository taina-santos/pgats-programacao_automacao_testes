/**
 * Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
acima de 30 -> "hora da diversão: [atividade]
 */

function mensagemAtividade(tempo) {
    if(tempo < 15)
        return `Atividade rápida`
    else if(tempo >= 15 && tempo <= 30)
        return `Tempo ideal`
    else
        return `Hora da diversão`
}

function selecaoAtividade(porteDog){
    if(porteDog === 'P' || porteDog === 'M' || porteDog == 'G')
        switch(porteDog){
            case 'P':
                return `Brincar dentro de casa`
            case 'M':
                return `Caminhada no quarteirão`
            case 'G':
                return `Correr no parque`
        }
    else
        return `Porte inválido`
}

function exibirPlanoAtividades(nomeDog, porteDog, tempo){
    console.log('-------------------------------------------')
    console.log(`Nome: ${nomeDog}`)
    console.log(`Porte: ${porteDog}`)
    console.log(`${mensagemAtividade(tempo)}: ${selecaoAtividade(porteDog)}`)
    console.log('-------------------------------------------')
}

exibirPlanoAtividades('Axel', 'P', 12)
exibirPlanoAtividades('Aloy', 'M', 25)
exibirPlanoAtividades('Maya', 'G', 45)