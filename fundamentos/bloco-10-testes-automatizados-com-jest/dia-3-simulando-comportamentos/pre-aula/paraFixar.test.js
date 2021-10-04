const fixar = require("../pre-aula/paraFixar.js");

describe('Utilize as funções do arquivo "math.js" para realizar os exercícios:', () => {
  it("Faça o mock da função subtrair e teste sua chamada", () => {
    fixar.subtrair = jest.fn();

    fixar.subtrair();
    expect(fixar.subtrair).toHaveBeenCalled();
  });
  it('Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno', () => {
    fixar.multiplicar = jest.fn().mockReturnValue(10);

    fixar.multiplicar();
    expect(fixar.multiplicar).toHaveBeenCalled();
    expect(fixar.multiplicar()).toBe(10);
  });
  it("Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados", async () => {
    fixar.somar = jest.fn().mockImplementation((a, b) => a + b);

    fixar.somar(2, 3);
    expect(fixar.somar).toHaveBeenCalled();
    expect(fixar.somar(2, 3)).toBe(5);
    expect(fixar.somar).toBeCalledWith(2, 3);

    // Gabarito ----\/
    const mockSomar = jest.spyOn(fixar, "somar");
    mockSomar.mockResolvedValue(5);

    mockSomar(2, 3);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(3); //Adaptado
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    await expect(mockSomar(2, 3)).resolves.toBe(5);
    // Fim do Gabarito /\
  });
  it('Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada', () => {
    fixar.dividir = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);

    expect(fixar.dividir()).toBe(2);
    expect(fixar.dividir()).toBe(5);
    expect(fixar.dividir()).toBe(15);
    expect(fixar.dividir).toHaveBeenCalled();
    expect(fixar.dividir).toHaveBeenCalledTimes(3);
  });
  it('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução', () => {
    const mockSubtrair = jest.spyOn(fixar, "subtrair");
    mockSubtrair.mockRestore();
    mockSubtrair.mockImplementation((a, b) => a * b);
    mockSubtrair.mockReturnValue(20);

    expect(mockSubtrair(10, 2)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

    mockSubtrair.mockRestore();
    mockSubtrair.mockReturnValue(8);

    expect(mockSubtrair(10, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  });
});
