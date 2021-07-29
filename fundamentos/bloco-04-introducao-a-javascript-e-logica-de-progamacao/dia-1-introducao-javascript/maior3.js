function inteiroAleatorio() {
    return Math.round(Math.random()*10)
}

let a = inteiroAleatorio();
let b = inteiroAleatorio();
let c = inteiroAleatorio();

if (a > b && a > c){
    console.log(a+' é o maior número ('+b+', '+c+').');
}else if (b > a && b > c){
    console.log(b+' é o maior número ('+a+', '+c+').');
}else if (c > a && c > b){
    console.log(c+' é o maior número ('+b+', '+c+').');
}else {
    console.log('Números iguais.');
}