const fatorial = n => n > 1 ? n*fatorial(n-1) : n;

console.log(fatorial(5));
