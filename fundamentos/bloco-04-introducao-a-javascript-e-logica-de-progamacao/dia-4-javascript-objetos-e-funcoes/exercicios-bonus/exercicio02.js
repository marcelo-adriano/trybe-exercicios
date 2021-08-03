/*
 Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. 
 Através de um loop for , percorra essa variável, busque os números pares e os adicione a 
 um novo array que deverá ser retornado ao final pela função. 
*/

function ehVetor(variavel){
    return Array.isArray(variavel);
}

function arrayOfNumbers (vector){
    let vetorDePares = [];

    for (let index = 0; index < vector.length; index += 1) {
        if(ehVetor(vector[index])){
            vetorDePares.push(arrayOfNumbers(vector[index]));
        }else{
            if (vector[index]%2 === 0) {
                vetorDePares.push(vector[index]);
            }
        }
    }

    return vetorDePares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));