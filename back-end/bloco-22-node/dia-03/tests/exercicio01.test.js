const { expect } = require('chai');

const funcao = require('../exerciciosDia/exercicio01');

describe('Quando o número for positivo', () => {
  it('o retorno deve ser "positivo"', () => {
    const resposta = funcao(9);
    expect(resposta).to.be.equals('positivo');
  });
  it('o retorno não deve ser "negativo"', () => {
    const resposta = funcao(8);
    expect(resposta).to.be.not.equals('negativo');
  });
  it('o retorno não deve ser "neutro"', () => {
    const resposta = funcao(7);
    expect(resposta).to.be.not.equals('neutro');
  });
});

describe('Quando o número for negativo', () => {
  it('o retorno deve ser "negativo"', () => {
    const resposta = funcao(-9);
    expect(resposta).to.be.equals('negativo');
  });
  it('o retorno não deve ser "positivo"', () => {
    const resposta = funcao(-8);
    expect(resposta).to.be.not.equals('positivo');
  });
  it('o retorno não deve ser "neutro"', () => {
    const resposta = funcao(-7);
    expect(resposta).to.be.not.equals('neutro');
  });
});

describe('Quando o número for neutro', () => {
  it('o retorno deve ser "neutro"', () => {
    const resposta = funcao(0);
    expect(resposta).to.be.equals('neutro');
  });
  it('o retorno não deve ser "positivo"', () => {
    const resposta = funcao(0);
    expect(resposta).to.be.not.equals('positivo');
  });
  it('o retorno não deve ser "negativo"', () => {
    const resposta = funcao(0);
    expect(resposta).to.be.not.equals('negativo');
  });
});

describe('Quando não for passado um número', () => {
  it('o retorno deve ser um erro', () => {
    expect(() => funcao('aaaa')).to.throw(/o valor deve ser um número/);
  });
});
