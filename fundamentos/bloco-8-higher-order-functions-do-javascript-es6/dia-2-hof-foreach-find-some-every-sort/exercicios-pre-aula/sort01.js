const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

people.sort((pessoaA, pessoaB) => pessoaA.age - pessoaB.age);

console.log(people);

people.sort((pessoaA, pessoaB) => pessoaB.age - pessoaA.age);

console.log(people);
