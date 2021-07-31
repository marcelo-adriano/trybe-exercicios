//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de
//n será sempre ímpar:

let n = 7;
let arrayDeAsterisco;
let alturaTriangulo = n/2;
let linhasVazias = alturaTriangulo-2;

console.log(' - - - '+n+' X '+Math.round(alturaTriangulo)+' - - - ')

//Escrever a primeira linha
arrayDeAsterisco = '';
let numeroEspacos = n - 1;

for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
    arrayDeAsterisco += ' ';
}

arrayDeAsterisco += '*';

for (let indexTres = 0; indexTres < numeroEspacos/2; indexTres += 1) {
    arrayDeAsterisco += ' ';
}
console.log(arrayDeAsterisco);

//Escrever as linhas com o interior vazio

for (let index = 0; index < linhasVazias; index += 1) {
    arrayDeAsterisco = '';
    let larguraDoNivel = 3 + (index*2);
    numeroEspacos = n - larguraDoNivel;
    let espacosInterno = larguraDoNivel - 2;

    for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
        arrayDeAsterisco += ' ';
    }
    
    arrayDeAsterisco += '*';
    
    for (let indexInterno = 1; indexInterno <= espacosInterno; indexInterno += 1) {
        arrayDeAsterisco += ' ';
    }
    
    arrayDeAsterisco += '*';
    
    for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
        arrayDeAsterisco += ' ';
    }
    
    console.log(arrayDeAsterisco);
}

//Escrever a última Linha
arrayDeAsterisco = '';

for (let ultimaIndex = 0; ultimaIndex < n; ultimaIndex += 1) {
    arrayDeAsterisco += '*';    
}

console.log(arrayDeAsterisco);
