/*
 Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas. 
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function avaliador(gabarito, resposta) {
    let macaco = 0;
    if (gabarito === resposta) {
        macaco = 1;
    } else if (resposta !== 'N.A') {
        macaco = -0.5;
    }
    return macaco;
}

function hof(arrayGabarito, arrayRespostas, avaliador) {
    let soma = 0;
    for (let index = 0; index < arrayGabarito.length; index += 1) {
        soma += avaliador(arrayGabarito[index], arrayRespostas[index]);
    }
    return soma;
}

console.log(hof(RIGHT_ANSWERS,STUDENT_ANSWERS,avaliador));