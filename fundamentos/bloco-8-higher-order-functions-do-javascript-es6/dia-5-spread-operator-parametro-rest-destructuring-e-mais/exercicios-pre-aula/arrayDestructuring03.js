let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// Como eu fiz
let [,,,a,b,c,d] = numerosPares;

console.log([a,b,c,d]);

// Como tá no gabarito

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];
