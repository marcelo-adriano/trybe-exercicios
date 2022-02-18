const { expect } = require('chai');
const verificaNota = require('../paraFixar/VerificaNota');

describe('Quando a média for menor que 7', () => {
  it('Retorna "Reprovado"', () => {
    const resposta = verificaNota(4);
    expect(resposta).to.be.equals('Reprovado');
  });
  it('Não retorna "Aprovado"', () => {
    const resposta = verificaNota(4);
    expect(resposta).to.be.not.equals('Aprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('Retorna "Aprovado"', () => {
    const resposta = verificaNota(8);
    expect(resposta).to.be.equals('Aprovado');
  });
  it('Não retorna "Reprovado"', () => {
    const resposta = verificaNota(9);
    expect(resposta).to.be.not.equals('Reprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('Retorna "Aprovado"', () => {
    const resposta = verificaNota(7);
    expect(resposta).to.be.equals('Aprovado');
  });
  it('Não retorna "Reprovado"', () => {
    const resposta = verificaNota(7);
    expect(resposta).to.be.not.equals('Reprovado');
  });
});
