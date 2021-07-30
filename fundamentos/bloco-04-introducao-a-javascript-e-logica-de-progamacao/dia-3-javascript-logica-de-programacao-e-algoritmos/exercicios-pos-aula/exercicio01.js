//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n 
//> 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 

function inteiroAleatorio() {
    return Math.round(Math.random()*10);
}


let n = inteiroAleatorio();
let arrayDeAsterisco = '*  ';

console.log(' - - - '+n+' X '+n+' - - - ')
for ( let index = 1; index < n ; index += 1) {
    arrayDeAsterisco += '*  ';
}
for (let indexDois = 0; indexDois < n; indexDois += 1) {
    console.log(arrayDeAsterisco);
}