const { getUserName } = require('../pos-aula/getUserName.js');

// Exercicio 02

describe('Testando promise - getUserName', () => {
  it('Caso em que o usuário Mark é encontrado', () => {
      return expect(getUserName(1)).resolves.toEqual('Mark');
    });
  it('Caso em que o usuário Paul é encontrado', () => {
      return expect(getUserName(2)).resolves.toEqual('Paul');
    });

  it('Caso em que o usuário não é encontrado', () => {
      expect(getUserName(3)).rejects.toEqual(
        new Error(`User with 3 not found.`)
      );
  });
});

// Exercicio 03

describe('Testando Async/Await - getUserName', () => {
    it('Caso em que o usuário é encontrado', async () => {
        try {
            const userOne = await getUserName(1);
            expect(userOne).toEqual('Mark');
            const userTwo = await getUserName(2);
            expect(userTwo).toEqual('Paul');
          } catch (error) {
            expect(error).toEqual(new Error('User with 3 not found.'));
          }
    });

    it('Caso em que o usuário não é encontrado', async () => {
        expect.assertions(1);
        try {
            await getUserName(3);
        } catch (error) {
            expect(error).toEqual(new Error('User with 3 not found.'));
        }
    });
});