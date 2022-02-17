const { promises: { writeFile } } = require('fs');

writeFile('./meu-arquivo.txt', 'Texto Texto')
  .then(() => console.log('Sucesso!'))
  .catch((err) => console.error(`Erro ao escrever o arquivo: ${err.message}`));
  