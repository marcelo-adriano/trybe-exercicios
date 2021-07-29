function inteiroAleatorio() {
    return Math.round(Math.random()*10)
}

let numeroUm = inteiroAleatorio();
let numeroDois = inteiroAleatorio();
let numeroTres = inteiroAleatorio();

let algumPar = null;

if (numeroUm%2 === 0 || numeroDois%2 === 0 || numeroTres%2 === 0) {
    algumPar = true;
} else {
    algumPar = false;
}

console.log(numeroUm+', '+numeroDois+' ou '+numeroTres+' é par?')
console.log(algumPar);