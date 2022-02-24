const connection = require('./connection');

const serialize = (bookData) => bookData.title;

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT title, author_id FROM model_example.books WHERE author_id = ?;`,
    [id],
  );

  if (books.length === 0) return null;

  return books.map(serialize);
}

module.exports = {
  getByAuthorId,
};
