import * as math from './math';

describe("testando a implementação original, o mock e a restauração da função original", () => {
  it("implementação original", () => {
    expect(math.somar(1, 2)).resolves.toBe(3);
  });
  it("criando o mock e substituindo a implementação para uma subtração com spyOn", () => {
    const mockSomar = jest
      .spyOn(math, "somar")
      .mockImplementation((a, b) => a - b);
  
    math.somar(5, 1);
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar(5, 1)).toBe(4);
    expect(mockSomar).toHaveBeenCalledTimes(2);
    expect(mockSomar).toHaveBeenLastCalledWith(5, 1);
  });
  it("restaurando a implementação original", () => {
    math.somar.mockRestore();
    expect(math.somar(1, 2)).resolves.toBe(3);
  });
});

describe("testando a implementação original, o mock e o mock resetado", () => {
  it("implementação original", () => {
    expect(math.somar(1, 2)).resolves.toBe(3);
  });
  it("criando o mock e substituindo a implementação para uma subtração", () => {
    math.somar = jest.fn().mockImplementation((a, b) => a - b);
  
    math.somar(5, 1);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar(5, 1)).toBe(4);
    expect(math.somar).toHaveBeenCalledTimes(2);
    expect(math.somar).toHaveBeenLastCalledWith(5, 1);
  });
  it("resetando o mock", () => {
    math.somar.mockReset();
    expect(math.somar(1, 2)).toBe(undefined);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenLastCalledWith(1, 2);
  });
});
