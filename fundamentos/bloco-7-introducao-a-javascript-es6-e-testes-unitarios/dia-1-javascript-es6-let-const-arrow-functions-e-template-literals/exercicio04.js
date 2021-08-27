const maiorPalavra = frase => {
    const palavras = frase.split(' ');
    let maior = 0;
    for (let index = 1; index < palavras.length; index += 1) {
        if (palavras[maior].length < palavras[index].length) {
            maior = index;
        }
    }
    console.log(palavras[maior]);
}

maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu");
// retorna 'aconteceu'