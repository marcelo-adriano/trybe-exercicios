//Agora inverta o lado do triângulo.

function inteiroAleatorio() {
    return Math.round(Math.random()*10);
}

let n = inteiroAleatorio();
let arrayDeAsterisco;

console.log(' - - - '+n+' X '+n+' - - - ')

for (let index = 1; index <= n; index += 1) {
    arrayDeAsterisco = '';
    for (let indexDois = 0; indexDois < n - index; indexDois += 1) {
        arrayDeAsterisco += ' ';
    }
    
    for (let indexTres = 0; indexTres < index; indexTres += 1) {
        arrayDeAsterisco += '*';
    }
    console.log(arrayDeAsterisco);
}