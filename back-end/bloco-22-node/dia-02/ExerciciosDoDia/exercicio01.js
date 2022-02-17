// Crie uma função que recebe três parâmetros retorna uma Promise .
// 
// 1. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// 2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// 3. Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// 4. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function exercicio(parUm, parDois, ParTres) {
  return new Promise((resolve, reject) => {
    if (typeof parUm !== 'number' || typeof parDois !== 'number' || typeof ParTres !== 'number') {
      reject("Informe apenas números");
    } else {
      const sumAndTime = (parUm + parDois) * ParTres;
      if (sumAndTime < 50) reject("Valor muito baixo");
      if (sumAndTime > 50) resolve(sumAndTime);
    }
  });
}

module.exports = exercicio;
