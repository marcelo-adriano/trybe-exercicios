// Faça um programa que diz se um número definido numa variável é primo ou não.
//
//---Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão
//dele com quaisquer outros números dá resto diferente de zero.
//---Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai
//precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

function inteiroAleatorio() {
    return Math.round(Math.random()*20);
}

let numero = inteiroAleatorio();
let ehPrimo = false;
let divisoesInteiras = [];

for (let index = 0; index < numero; index += 1) {
    let comparacao = 1 + index;
    if (numero%comparacao === 0) {
        divisoesInteiras.push(comparacao);
    }
}

let tamanhoArray = divisoesInteiras.length;

if (tamanhoArray === 2) {
    ehPrimo = true;    
}

console.log(numero+' é primo? '+ehPrimo);