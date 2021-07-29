function booleanAleatorio() {
    return Boolean(Math.round(Math.random()));
}

let positiveNegative = booleanAleatorio();

if (positiveNegative) {
    console.log('positive');
} else {
    console.log('negative');
}