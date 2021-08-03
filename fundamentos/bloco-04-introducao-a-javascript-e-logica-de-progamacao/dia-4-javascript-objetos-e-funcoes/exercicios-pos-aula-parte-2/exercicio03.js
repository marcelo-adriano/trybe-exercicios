/** Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    Valor esperado no retorno da função: 6 .

 */


    function menorIndiceArray(array, indice, menor){
        if(indice <= array.length-1){
            if (array[menor] < array[indice]) {
                return menorIndiceArray(array, indice+1, menor);
            }else{
                return menorIndiceArray(array, indice+1, indice);
            }
        }else{
            return menor;
        }
    }
    
    let vetor = [2, 4, 6, 7, 10, 0, -3];
    console.log(menorIndiceArray(vetor,0,0), 'é o índice do menor');
    