const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => Author.findById(id);

const createAuthor = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  return Author.createAuthor(firstName, middleName, lastName);
};

const findById = async (id) => {
  // Solicitamos que o model realize a busca no banco
  const author = await Author.findById(id);

  // Caso nenhuma pessoa autora seja encontrada, retornamos um objeto de erro.
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  // Caso haja uma pessoa autora com o ID informado, retornamos essa pessoa
  return author;
};
const getAll = async () => Author.getAll();

module.exports = {
  getAll,
  findById,
  createAuthor,
};
