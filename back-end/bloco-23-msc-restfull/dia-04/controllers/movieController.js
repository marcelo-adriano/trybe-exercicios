const MoviesService = require('../services/movieService');

const create = async (request, response) => {
  const { title, directedBy, releaseYear } = request.body;
  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return response.status(400).send('Dados inválidos');
  }

  response.status(201).send('Filme criado com sucesso!');
};

module.exports = {
  create,
};
