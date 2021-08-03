/** Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

    Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
    Valor esperado no retorno da função: 2 .
*/

function maisVezesVetor(vetor){
    let maisVezesValor = 0;
    let maisVezesQuantidade = 0;
    
    for (let index = 0; index < vetor.length; index += 1) {
        let soma = 0;
        for (let indexDois = 0; indexDois < vetor.length; indexDois += 1) {
            if (vetor[index] === vetor[indexDois]) {
                soma += 1;
            }
        }
        if (soma > maisVezesQuantidade) {
            maisVezesQuantidade = soma;
            maisVezesValor = vetor[index];
        }
    }

    return maisVezesValor;
}

let vetor = [2, 3, 2, 5, 8, 2, 3];

console.log("O número com maior número de repetições é: "+maisVezesVetor(vetor));