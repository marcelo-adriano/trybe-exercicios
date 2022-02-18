const fs = require('fs');
const { expect } = require('chai');
const { stub } = require('sinon');

const funcao = require('../exerciciosDia/exercicio04');

stub(fs, 'writeFileSync');

describe('Executa a função escrevaArquivo', () => {
  describe('a resposta', () => {
    it('é uma "string"', async () => {
      const resposta = await funcao('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', async () => {
      const resposta = await funcao('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});
