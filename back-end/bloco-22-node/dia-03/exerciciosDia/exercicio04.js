const { promises: { writeFile } } = require('fs');

module.exports = (arquivo, conteudo) => writeFile(arquivo, conteudo)
    .then(() => 'ok')
    .catch((err) => {
      throw new Error(err);
    });