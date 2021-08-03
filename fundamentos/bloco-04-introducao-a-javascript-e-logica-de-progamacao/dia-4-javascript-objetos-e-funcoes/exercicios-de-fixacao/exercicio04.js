//Faça um programa que retorne o maior de N números. Defina no começo do programa duas 
//constantes com os valores que serão comparados. 

//Função para ordenar o sort() do menor para o maior;
function ordenar (a, b){
    return a - b; 
}

//Função que retorna um valor inteiro de 0 a 100 pseudo-aleatório; 
function inteiroAleatorio() {
    return Math.round(Math.random()*100);
}

//Função que retorna um valor inteiro de 0 a 20 pseudo-aleatório;
function vezesAleatorio() {
    return Math.round(Math.random()*20);
}

let anyArray = [];

//Função recursiva que cria um array com números tamanho e valores pseudo-aleatório;
function construirArray(array, vezes){
    if (vezes === 0) {
        return array;
    } else {
        array.push(inteiroAleatorio());
        return construirArray(array, vezes-1);
    }
}

//Função recursiva que compara se há algum número diferente. Se só houver números iguais
//retorna true, se não, a função retorna false;
function comparar (array, index){
    if(array[index] === array[index-1]){
        if(index > 1){
            return comparar(array, index-1);
        }else{
            return console.log('Números Iguais.');
        }
    }else{
        return console.log('Entre os números '+array+' o maior valor é '+array[indexNumeros]);
    }
}

const numeros = construirArray(anyArray, vezesAleatorio());//Constante que recebe os 
                                                           //valores;
let indexNumeros = numeros.length - 1;//Variável que recebe o maior índice do array 
                                      //'numeros'; 
numeros.sort(ordenar);//Ordenando o array com a função sort() que chama uma função de 
                      //comparação. Assim, o array, fica ordenado no menor(índice 0) para o 
                      //maior (maior índice);

comparar(numeros, indexNumeros);//Chamando função que compara os números e imprime tanto 
                                //array quanto o maior valor;