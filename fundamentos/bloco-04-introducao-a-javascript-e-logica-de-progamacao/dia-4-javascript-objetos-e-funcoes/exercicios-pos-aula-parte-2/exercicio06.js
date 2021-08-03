/* 
 Crie uma função que receba um número inteiro N e retorne o somatório de todos os números 
 de 1 até N.

    Valor de teste: N = 5 .
    Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

*/

function soma(numero) {
    if(numero === 1){
        return numero;
    }else{
        return numero+soma(numero-1);
    }
}

let numero = 15

console.log(soma(numero));