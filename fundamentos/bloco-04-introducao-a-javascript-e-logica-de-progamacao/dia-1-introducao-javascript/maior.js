function inteiroAleatorio() {
    return Math.round(Math.random()*10)
}

let a = inteiroAleatorio();
let b = inteiroAleatorio();

if (a > b){
    console.log('O número '+a+' é maior que '+b+'.');
}else if (b > a){
    console.log('O número '+b+' é maior que '+a+'.');
}else{
    console.log('Números iguais.');
}