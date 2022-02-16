const imc_calc = require('./imc_calc');
const {peso, altura} = require('./question');
const situation = require('./situation');

console.log(`Você é considerado com ${situation(imc_calc(peso, altura))}`);
