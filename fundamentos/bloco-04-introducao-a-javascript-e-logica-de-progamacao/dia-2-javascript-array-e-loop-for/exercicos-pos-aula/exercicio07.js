//Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let booleanArray = [true];

for (let index = 0; index < numbers.length; index+=1) {
    let numeroA = numbers[index];
    for (let indexDois = 0; indexDois < numbers.length; indexDois+=1) {
        let numeroB = numbers[indexDois];
        if (numeroA > numeroB) {
            booleanArray[index] = false;
            break;
        }
    }
    booleanArray.push(true);
}

let menorNumero = numbers[booleanArray.indexOf(true)];
console.log('O menor número do array é ' + menorNumero);