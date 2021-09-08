const assert = require("assert");

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Exercício 01

const expectedResult1 = [
  "As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin",
  "O Senhor dos Anéis - Fantasia - J. R. R. Tolkien",
  "Fundação - Ficção Científica - Isaac Asimov",
  "Duna - Ficção Científica - Frank Herbert",
  "A Coisa - Terror - Stephen King",
  "O Chamado de Cthulhu - Terror - H. P. Lovecraft",
];

function formatedBookNames() {
  return books.map(
    (livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`
  );
}

assert.deepStrictEqual(formatedBookNames(), expectedResult1);

//Exercício 02

const expectedResult2 = [
  {
    age: 31,
    author: "Isaac Asimov",
  },
  {
    age: 38,
    author: "H. P. Lovecraft",
  },
  {
    age: 39,
    author: "Stephen King",
  },
  {
    age: 43,
    author: "George R. R. Martin",
  },
  {
    age: 45,
    author: "Frank Herbert",
  },
  {
    age: 62,
    author: "J. R. R. Tolkien",
  },
];

function nameAndAge() {
  resposta = books.map((livro) => {
    return {
      age: livro.releaseYear - livro.author.birthYear,
      author: livro.author.name,
    };
  });
  return resposta.sort((livroA, livroB) => livroA.age - livroB.age);
}

assert.deepStrictEqual(nameAndAge(), expectedResult2);

//Exercício 03

const expectedResult3 = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
  },
];

function fantasyOrScienceFiction() {
  return books.filter(
    (livro) => livro.genre === "Fantasia" || livro.genre === "Ficção Científica"
  );
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

//Exercício 04

const expectedResult4 = [
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  return books
    .filter((livro) => livro.releaseYear < 1962)
    .sort((a, b) => a.releaseYear - b.releaseYear);
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult4);

//Exercício 05

const expectedResult5 = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

function fantasyOrScienceFictionAuthors() {
  return books
    .filter(
      (livro) =>
        livro.genre === "Fantasia" || livro.genre === "Ficção Científica"
    )
    .map((livros) => livros.author.name)
    .sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);

//Exercício 06

const expectedResult6 = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

function oldBooks() {
  return books
    .filter((livro) => livro.releaseYear < 1962)
    .map((livros) => livros.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult6);

//Exercício 07

const expectedResult7 = "O Senhor dos Anéis";

function authorWith3DotsOnName() {
  const regex = /^\S\.\s\S\.\s\S\./g;
  return books
    .filter((livro) => regex.test(livro.author.name))[0].name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult7);
