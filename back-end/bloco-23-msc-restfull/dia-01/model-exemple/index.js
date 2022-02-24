const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_request, response) => {
  const authors = await Author.getAll();

  response.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;

    const author = await Author.findById(id);

    if (!author) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(author);
});

app.get('/books', async (request, response) => {
  const { author_id } = request.query;
  const books = await Book.getByAuthorId(author_id);

  if (!books) return response.status(404).json({ message: 'Not found' });

  response.status(200).json(books);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`)});
