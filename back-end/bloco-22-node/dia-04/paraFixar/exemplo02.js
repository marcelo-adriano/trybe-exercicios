const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const drinksSorted = [...drinks].sort((a, b) => a.name.localeCompare(b.name))

app.get('/drinks', (request, response) => {
  response.json(drinksSorted);
});

app.get('/drinks/:id', (request, response) => {
  const { id } = request.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));

  if (!drink) return response.status(404).json({ message: 'Drink not found!'});

  response.status(200).json(drink);
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
