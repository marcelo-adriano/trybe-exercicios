const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso(em Kg)? ');
const altura = readline.questionFloat('Qual a sua altura(em m)? ');

module.exports = {
  peso,
  altura,
};
