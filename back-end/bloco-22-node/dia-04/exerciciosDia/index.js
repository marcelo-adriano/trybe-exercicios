const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (request, response) => {
  response.json({ message: 'pong' });
});

app.post('/hello', (request, response) => {
  const { name } = request.body;
  response.status(201).json({ message: `Hello, ${name}!`  });
});

app.post('/greetings', (request, response) => {
  const { name, age } = request.body;
  if (age < 18) return response.status(401).json({ message: 'Unauthorized' });
  response.status(200).json({ message: `Hello, ${name}!`  });
});

app.put('/users/:name/:age', (request, response) => {
  const { name, age } = request.params;
  response.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});