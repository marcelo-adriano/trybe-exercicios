//Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let booleanArray = [true];

for (let index = 0; index < numbers.length; index+=1) {
    let numeroA = numbers[index];
    for (let indexDois = 0; indexDois < numbers.length; indexDois+=1) {
        let numeroB = numbers[indexDois];
        if (numeroA < numeroB) {
            booleanArray[index] = false;
            break;
        }
    }
    booleanArray.push(true);
}

let maiorNumero = numbers[booleanArray.indexOf(true)];
console.log('O maior número do Array é ' + maiorNumero);

/*
let ultimoNumbers = numbers.length - 1;
//Código retirado do site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function funcaoDeComparacao (a, b){
    return a - b;
}
//Fim do código referenciado

let numerosOrdenados = numbers.sort(funcaoDeComparacao);
let maiorNumero = numerosOrdenados[ultimoNumbers];

console.log(maiorNumero);*/