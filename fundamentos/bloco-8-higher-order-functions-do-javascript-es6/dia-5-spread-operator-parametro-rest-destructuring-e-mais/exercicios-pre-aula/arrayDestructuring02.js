let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// Como eu fiz

let [ ...food ] = bebida;
let [ ...bixo ] = comida;
let [ ...drink ] = animal;

console.log(food.join(''), bixo.join(''), drink.join('')); // arroz gato água

// Como Tá no gabarito

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

