//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo 
//com 5 asteriscos de base. Por exemplo: 

function inteiroAleatorio() {
    return Math.round(Math.random()*10);
}

let n = inteiroAleatorio();
let arrayDeAsterisco = '*';

console.log(' - - - '+n+' X '+n+' - - - ')

for (let indexDois = 1; indexDois <= n; indexDois += 1) {
    console.log(arrayDeAsterisco);
    arrayDeAsterisco += '*';
}