/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de 
caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .
 */

function maiorString(array, indice, maior){
    if(indice <= array.length-1){
        if (array[maior].length > array[indice].length) {
            return maiorString(array, indice+1, maior);
        }else{
            return maiorString(array, indice+1, indice);
        }
    }else{
        return array[maior];
    }
}

let vetor = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorString(vetor,0,0), 'é o maior nome.');