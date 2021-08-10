let pai = document.getElementById('pai');
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let terceiroFilho = document.getElementById('terceiroFilho');


//Exercício 01
let exercicioUm = document.createElement('section');
exercicioUm.innerHTML = "Texto!"

pai.appendChild(exercicioUm);
console.log(exercicioUm.parentElement);

//Exercício 02
let exercicioDois = document.createElement('section');
exercicioDois.innerHTML = "Texto!"

ondeVoceEsta.appendChild(exercicioDois);
console.log(exercicioDois.parentElement);

//Exercício 03

let exercicioTres = document.createElement('section');
exercicioTres.innerHTML = "Texto!"

primeiroFilhoDoFilho.appendChild(exercicioTres);
console.log(exercicioTres.parentElement);

//Exercício 04

console.log(exercicioTres.parentElement.parentElement.nextElementSibling);

