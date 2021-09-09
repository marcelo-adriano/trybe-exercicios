const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const resposta = names.join('').toLowerCase().split('');
  return resposta.reduce((total, letra) => letra === 'a' ? total + 1 : total, 0);
}

assert.deepStrictEqual(containsA(), 20);