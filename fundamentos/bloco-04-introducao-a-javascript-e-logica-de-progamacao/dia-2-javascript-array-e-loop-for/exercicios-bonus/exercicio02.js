//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let tamanhoNumbers = numbers.length;


for (let index = tamanhoNumbers - 1; index > 0; index -= 1) {
    for (let indexDois = 0; indexDois < index; indexDois += 1) {
        if (numbers[indexDois] < numbers[indexDois + 1]) {
            let auxiliar = numbers[indexDois];
            numbers[indexDois] = numbers[indexDois + 1];
            numbers[indexDois + 1] = auxiliar;
        }
    }
}
console.log(numbers)