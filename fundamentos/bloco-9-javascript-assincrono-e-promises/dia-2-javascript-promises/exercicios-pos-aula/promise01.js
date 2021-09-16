const promessa = new Promise((resolve, reject) => {
    let numeros = []
    for(i = 0; i < 10; i += 1){
        numeros.push(Math.round(Math.random() * 50));
    }
    const dobro = numeros.map((numero) => numero * 2);
    const soma = dobro.reduce((acc, curr) => acc + curr, 0);
    if (soma < 8000) {
        resolve(soma);
    } else {
        reject('É mais de oito mil! Essa promise deve estar quebrada!');
    }
})
.then(sum => [2, 3, 5, 10].map(number => sum / number))
.then(lista => console.log(lista.reduce((number, acc) => number + acc, 0)))
.catch((erro) => console.log(erro));