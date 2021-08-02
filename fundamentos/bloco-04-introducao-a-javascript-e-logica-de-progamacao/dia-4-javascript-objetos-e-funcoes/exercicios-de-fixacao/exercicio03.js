function inteiroAleatorio() {
    return Math.round(Math.random()*10)
}

let valores = [inteiroAleatorio(), inteiroAleatorio()]

function soma (a, b){
    return a + b;
}
function subtracao (a, b){
    return a - b;
}
function multiplicacao (a, b){
    return a * b;
}
function divisao (a, b){
    return a / b;
}
function modulo (a, b){
    return a % b;
}

console.log('Valor 1 = '+valores[0]+'| Valor 2 = '+valores[1])
console.log('Soma: '+soma(valores[0], valores[1]))
console.log('Subtração: '+subtracao(valores[0], valores[1]))
console.log('Multiplicação: '+multiplicacao(valores[0], valores[1]))
console.log('Divisão: '+divisao(valores[0], valores[1]))
console.log('Módulo/Resto: '+modulo(valores[0], valores[1]))