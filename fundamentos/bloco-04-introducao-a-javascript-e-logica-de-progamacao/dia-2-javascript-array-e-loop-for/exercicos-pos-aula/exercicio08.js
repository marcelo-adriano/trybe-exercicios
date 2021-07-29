//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let umAVinteCincoArray = [1];

for (let index = 0; umAVinteCincoArray[index] < 25; index+=1) {
    let proximoNumero = umAVinteCincoArray[index] + 1;
    umAVinteCincoArray.push(proximoNumero);
}

console.log(umAVinteCincoArray)