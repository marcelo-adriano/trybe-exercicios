/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .
*/

function maiorNoArray(array, indice, maior){
    if(indice <= array.length-1){
        if (array[maior] > array[indice]) {
            return maiorNoArray(array, indice+1, maior);
        }else{
            return maiorNoArray(array, indice+1, indice);
        }
    }else{
        return maior;
    }
}

let vetor = [2,3,6,7,10,1];
console.log(maiorNoArray(vetor,0,0), 'é o índice do maior');
