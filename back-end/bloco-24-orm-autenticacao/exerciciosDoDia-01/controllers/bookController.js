const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_request, response) => {
  try {
    const books = await Book.findAll();
    return response.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: 'Algo deu errado'})
  }
});
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findByPk(id);

    if (!book) return response.status(404).json({ message: 'Livro não encontrado' });

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: 'Algo deu errado'})
  }
});
router.post('/', async (request, response) => {
  try {
    const { title, author, pageQuantity } = request.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return response.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: 'Algo deu errado'})
  }
});
router.post('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { title, author, pageQuantity = 0 } = request.body;
    const books = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );
    return response.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: 'Algo deu errado'})
  }
});
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deletedBook = await Book.destroy({ where : { id }});
    console.log(deletedBook)
    return response.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: 'Algo deu errado'})
  }
});

module.exports = router;
