const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };
  
  test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(5, 10, (result) => {
      try {
        expect(result).not.toBe(16);
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    });
  });