//Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let temImpar = false;

for (let index = 0; index < numbers.length; index+=1) {
    let numeroComparado = numbers[index];
    if (numeroComparado%2 !== 0) {
        temImpar = true;
        console.log(numeroComparado+' é impar.');
    }
}

if (!temImpar) {
    console.log('Nenhum Valor ímpar encontrado');
}
