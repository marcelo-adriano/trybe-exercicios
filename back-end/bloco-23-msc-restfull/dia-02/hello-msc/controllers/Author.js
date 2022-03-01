const Author = require('../services/Author');

const getAll = async (req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
};

module.exports = {
  getAll,
};
