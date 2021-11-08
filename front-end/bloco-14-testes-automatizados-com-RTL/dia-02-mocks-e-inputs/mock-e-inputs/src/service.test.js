const services = require('./service');

afterEach(() => jest.restoreAllMocks());

it("Exercicios 01", () => {
  services.randomNumber = jest.fn().mockReturnValue(10);
  services.randomNumber();

  expect(services.randomNumber).toHaveBeenCalled();
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
  expect(services.randomNumber()).toBe(10);
});

it("Exercicios 02", () => {
  services.randomNumber = jest.fn().mockImplementationOnce((a, b) => a/b);

  expect(services.randomNumber(2, 2)).toBe(1);
  expect(services.randomNumber).toHaveBeenLastCalledWith(2, 2);
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
  expect(services.randomNumber(4, 2)).toBe(undefined);
});

it("Exercicios 03", () => {
  services.randomNumber = jest.fn().mockImplementation((a, b, c) => a*b*c);

  expect(services.randomNumber(2, 2, 2)).toBe(8);
  expect(services.randomNumber).toHaveBeenLastCalledWith(2, 2, 2);
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
  expect(services.randomNumber(3, 3, 3)).toBe(27);
  expect(services.randomNumber).toHaveBeenLastCalledWith(3, 3, 3);
  expect(services.randomNumber).toHaveBeenCalledTimes(2);

  services.randomNumber.mockRestore();

  services.randomNumber = jest.fn().mockImplementation((number) => number * 2);

  expect(services.randomNumber(2)).toBe(4);
  expect(services.randomNumber).toHaveBeenLastCalledWith(2);
  expect(services.randomNumber).toHaveBeenCalledTimes(1);
  expect(services.randomNumber(3)).toBe(6);
  expect(services.randomNumber).toHaveBeenLastCalledWith(3);
  expect(services.randomNumber).toHaveBeenCalledTimes(2);
});

it("Exercicios 04", () => {
  services.uppercaser = jest.fn().mockImplementation((anyString) => anyString.toLowerCase());
  services.firstLetter = jest.fn().mockImplementation((str) => str.charAt(str.length - 1));
  services.concatTwoSrings = jest.fn().mockImplementation((a, b, c) => a.concat(b, c));

  expect(services.uppercaser("MACACO")).toBe("macaco");
  expect(services.uppercaser).toHaveBeenLastCalledWith('MACACO');
  expect(services.uppercaser).toHaveBeenCalledTimes(1);
  expect(services.firstLetter("MACACO")).toBe("O");
  expect(services.firstLetter).toHaveBeenLastCalledWith('MACACO');
  expect(services.firstLetter).toHaveBeenCalledTimes(1);
  expect(services.concatTwoSrings("MA", "CA", "CO")).toBe("MACACO");
  expect(services.concatTwoSrings).toHaveBeenLastCalledWith("MA", "CA", "CO");
  expect(services.concatTwoSrings).toHaveBeenCalledTimes(1);
});

it("Exercicio 04 - C", () => {
  services.uppercaser.mockRestore();
  expect(services.uppercaser("ui")).toBe("UI");
  expect(services.firstLetter("ui")).toBe("u");
  expect(services.concatTwoSrings("u","i")).toBe("ui");
});
