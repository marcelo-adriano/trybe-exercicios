//Exercício 01
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

console.log(ondeVoceEsta);
console.log('Fim do exercício 01');

//Exercício 02
let pai = ondeVoceEsta.parentNode;

console.log(pai);

pai.style.backgroundColor = 'red';
console.log('Fim do exercício 02');

//Exercício 03
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

primeiroFilhoDoFilho.innerHTML = 'Texto';
console.log('Fim do exercício 03');

//Exercício 04
console.log(pai.firstElementChild);
console.log('Fim do exercício 04');

//Exercício 05
console.log(ondeVoceEsta.previousElementSibling);
console.log('Fim do exercício 05');

//Exercício 06
console.log(ondeVoceEsta.nextSibling);
console.log('Fim do exercício 06');

//Exercício 07
console.log(ondeVoceEsta.nextElementSibling);
console.log('Fim do exercício 07');

//Exercício 08
console.log(pai.children[2]);
console.log('Fim do exercício 08');