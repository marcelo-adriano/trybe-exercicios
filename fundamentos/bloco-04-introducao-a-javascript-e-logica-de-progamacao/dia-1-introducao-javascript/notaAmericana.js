let nota = 89;

console.log(nota);

switch (true) {
    case (nota >= 0 && nota < 50):
        console.log('Nota F');
        break;

    case (nota >= 50 && nota < 60):
        console.log('Nota E');
        break;

    case (nota >= 60 && nota < 70):
        console.log('Nota D');
        break;

    case (nota >= 70 && nota < 80):
        console.log('Nota C');
        break;

    case (nota >= 80 && nota < 90):
        console.log('Nota B');
        break;

    case (nota >= 90 && nota <= 100):
        console.log('Nota A');
        break;

    default:
        console.log('Erro - Nota fora do escopo permitido');
        break;
}