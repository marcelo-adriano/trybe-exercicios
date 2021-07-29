function inteiroAleatorio() {
    return Math.round(Math.random()*10)
}

let a = inteiroAleatorio();
let b = inteiroAleatorio();

let resultado = a % b;

console.log('O módulo de '+a+'/'+b+' é '+resultado);