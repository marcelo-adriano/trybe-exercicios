function verificar(numeroUm, numeroDois) {
    return numeroDois !== numeroUm ? 'Tente novamente' : 'Parabéns você ganhou';
}

function sorteio(numero, verificacao) {
    const numeroAleatorio = Math.round(Math.random()*5);
    console.log(numeroAleatorio);
    return verificacao(numero, numeroAleatorio);
}

console.log(sorteio(1, verificar));
console.log(sorteio(2, verificar));
console.log(sorteio(3, verificar));
console.log(sorteio(4, verificar));
console.log(sorteio(5, verificar));