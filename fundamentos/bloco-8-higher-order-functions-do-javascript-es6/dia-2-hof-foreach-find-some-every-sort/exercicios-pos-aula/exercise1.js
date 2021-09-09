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

function authorBornIn1947() {
  return books.find((livro) => livro.author.birthYear === 1947).author.name;
}

assert.strictEqual(authorBornIn1947(), "Stephen King");

//Exercício 02

function smallerName() {
  let nameBook;
  books.forEach((livro, index) => {
    if (index === 0) {
      nameBook = livro.name;
    }
    if (livro.name.length < nameBook.length) {
      nameBook = livro.name;
    }
  });
  return nameBook;
}

assert.strictEqual(smallerName(), "Duna");

//Exercício 03

const expectedResult = {
  author: {
    birthYear: 1948,
    name: "George R. R. Martin",
  },
  genre: "Fantasia",
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((livro) => livro.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

//Exercício 04

const expectedResult2 = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: { name: "Stephen King", birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
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
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort(
    (elementoA, elementoB) => elementoB.releaseYear - elementoA.releaseYear
  );
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult2);

//Exercício 05

function everyoneWasBornOnSecXX() {
  return books.every((livro) => livro.author.birthYear > 1900 && livro.author.birthYear < 2001);
}

assert.strictEqual(everyoneWasBornOnSecXX(), false);

//Exercício 06

function someBookWasReleaseOnThe80s() {
  return books.some((livro) => livro.releaseYear > 1979 && livro.releaseYear < 1990);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), true);

//Exercício 07

function authorUnique() {
  return books.every((livro, index, lista) => {
    return !lista.some((elemento) => elemento.author.birthYear === livro.author.birthYear);
  });
}

assert.strictEqual(authorUnique(), false);