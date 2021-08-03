/* Faça um programa que receba uma string em algarismos romanos e retorne o número que a 
string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:

    Uma string é um array de caracteres, então cada elemento do array é uma letra.
    O valor de cada numeral romano é:

    | I   | 1    |
    | --- | ---- |
    | IV  | 4    |
    | V   | 5    |
    | IX  | 9    |
    | X   | 10   |
    | XL  | 40   |
    | L   | 50   |
    | XC  | 90   |
    | C   | 100  |
    | CD  | 400  |
    | D   | 500  |
    | CM  | 900  |
    | M   | 1000 |

    Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

    Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem 
    ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda 
    de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

*/

function traduzirRomano (string){
    let numero;
    switch (string) {
        case 'i':
            numero = 1;
            break;
        case 'v':
            numero = 5;
            break;
        case 'x':
            numero = 10;
            break;
        case 'l':
            numero = 50;
            break;
        case 'c':
            numero = 100;
            break;
        case 'd':
            numero = 500;
            break;
        case 'm':
            numero = 1000;
            break;
        default:
            throw new Error('Entrada Não reconhecida! Por favor verifique se a string só tenha números romanos válidos');
            break;
    }
    return numero;
}

function ehMaior (antes, depois){
    if (antes > depois) {
        return true;
    } else {
        return false;
    }
}

let vetorRomano = ['xxv',//5+10+10=25
                'xxxix',//10-1+10+10+10=39
                'cclxix',//10-1+10+50+100+100=269
                'mcmxiv',//5-1+10+1000-100+1000=1914
                'mdcccxiii',//1+1+1+10+100+100+100+500+1000=1813
                'cdxxvii',//1+1+5+10+10+500-100=427
                'ccc',//100+100+100=300
                'm',//1000
                'xviii',//1+1+1+5+10=18
                'xlvi',//1+5+50-10=46
                'xxx',//10+10+10=30
                'dcxvi'];//1+5+10+100+500=616
//let vetorDecimal = [];

for (let index = 0; index < vetorRomano.length; index += 1) {
    let soma = 0;
    let numeroAntes = 0;
    let numeroDepois = 0;
    let stringRomana = vetorRomano[index];

    for (let indexDois = stringRomana.length-1; indexDois >=0 ; indexDois -= 1) {
        numeroDepois = traduzirRomano(stringRomana.charAt(indexDois));
        if (ehMaior(numeroAntes, numeroDepois)) {
            soma -= numeroDepois;
        }else{
            soma += numeroDepois;
        }
        numeroAntes = numeroDepois;
    }
    console.log(stringRomana,'vale', soma);
}
