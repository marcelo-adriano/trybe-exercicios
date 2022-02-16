const readline = require('readline-sync');

const velocidadeMedia = (distancia, tempo) => distancia/tempo;

const distancia = readline.questionFloat('Qual a distancia percorrida (em Km)? ');
const tempo = readline.questionFloat('Em quanto tempo(em horas)? ');

console.log(`A velocidade média é de ${velocidadeMedia(distancia, tempo)}Km/h`);
