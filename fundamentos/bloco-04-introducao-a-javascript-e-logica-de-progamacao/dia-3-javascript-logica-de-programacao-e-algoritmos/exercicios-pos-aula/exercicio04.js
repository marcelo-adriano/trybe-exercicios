//Depois, faça uma pirâmide com n asteriscos de base:

function inteiroAleatorio() {
    return Math.round(Math.random()*(15-3)+3);
}

let base = inteiroAleatorio();
/*
Revisando o Conteúdo com Ítalo Sérgio, da turma 15 - tribo A, observamos a seguinte relação

Base |  Altura
 1   |   1
 2   |   1
 3   |   2
 4   |   2
 5   |   3
 6   |   3
 7   |   4
 8   |   4
 9   |   5
10   |   5

vimos que, se base for par, a altura é base/2

        Base |  Altura
        2    |   1
        4    |   2
        6    |   3
        8    |   4
        10   |   5
        x    |   x/2
        se a base for n, x=n, então altura=n/2

mas se a base for impar, a altura é (base+1)/2
        Base |  Altura
        1    |   1
        3    |   2
        5    |   3
        7    |   4
        9    |   5
       1+2x  |  1+x
       se a base for n, logo x=(n-1)/2,então altura=((n-1)/2)+1
*/
let altura;
let linhaConstruida = '';
let asteriscosIniciais = 0;

if (base%2 !== 0) {
    altura = ((base-1)/2)+1;
    console.log(' - - - '+base+' X '+altura+' - - - ');
    asteriscosIniciais = 1;
    
} else {
    altura = base/2;
    console.log(' - - '+base+' X '+altura+' - - ');
    asteriscosIniciais = 2;
}

for (let index = 0; index < altura; index += 1) {
    linhaConstruida = '';
    let direita = '';
    let esquerda = '';
    let asterisco = '';

    let numeroAsterisco = asteriscosIniciais+(index*2);
    let numeroEspacos = base - numeroAsterisco;

    for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
        direita += ' ';
        esquerda += ' ';
    }
    for (let indexTres = 1; indexTres <= numeroAsterisco; indexTres += 1) {
        asterisco += '*';
    }
    linhaConstruida = esquerda + asterisco + direita
    console.log(linhaConstruida);
}