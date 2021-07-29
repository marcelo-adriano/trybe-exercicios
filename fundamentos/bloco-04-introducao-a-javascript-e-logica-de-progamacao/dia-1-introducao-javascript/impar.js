function inteiroAleatorio() {
    return Math.round(Math.random()*10)
}

let numeroUm = inteiroAleatorio();
let numeroDois = inteiroAleatorio();
let numeroTres = inteiroAleatorio();

let algumImpar = null;

if (numeroUm%2 !== 0 || numeroDois%2 !== 0 || numeroTres%2 !== 0) {
    algumImpar = true;
} else {
    algumImpar = false;
}

console.log(numeroUm+', '+numeroDois+' ou '+numeroTres+' é impar?')
console.log(algumImpar);