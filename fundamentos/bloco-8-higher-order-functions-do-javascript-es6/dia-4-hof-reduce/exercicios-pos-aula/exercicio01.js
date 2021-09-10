const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
    return arrays.reduce((elemento, proximo) => {
        console.log(elemento);
        return elemento.concat(proximo);
    });
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);