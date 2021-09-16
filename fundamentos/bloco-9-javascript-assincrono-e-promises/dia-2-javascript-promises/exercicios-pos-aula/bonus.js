const promessa = () => {
    let numeros = []
    for(i = 0; i < 10; i += 1){
        numeros.push(Math.round(Math.random() * 50));
    }
    const dobro = numeros.map((numero) => numero * 2);
    const soma = dobro.reduce((acc, curr) => acc + curr, 0);
    if (soma >= 8000) {
        throw new Error('É mais de oito mil! Essa promise deve estar quebrada!');
    }
    return soma;
};

const listaDois = sum => [2, 3, 5, 10].map(number => sum / number).reduce((acc, cur) => acc + cur, 0);

const coisaChataDaPorra = async () => {
    try {
        const soma = await promessa();
        const somaBesta = await listaDois(soma);
        console.log(somaBesta);
    } catch (error) {
        console.log(error);
    }
}

coisaChataDaPorra();