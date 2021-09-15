// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'couve', 'louro'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['arroz', 'feijão', 'farofa'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));