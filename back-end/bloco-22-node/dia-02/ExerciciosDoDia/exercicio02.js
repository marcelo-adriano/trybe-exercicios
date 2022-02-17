// Escreva um código para consumir a função construída no exercício anterior.
// 
// 1. Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// 2. Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// 3. Utilize then e catch para manipular a Promise retornada pela função:
//     1. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
//     2. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. 

const exercicio01 = require('./exercicio01');

const randomNumber = () => Math.round(Math.random() * 100);

exercicio01(randomNumber(), randomNumber(), randomNumber())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
