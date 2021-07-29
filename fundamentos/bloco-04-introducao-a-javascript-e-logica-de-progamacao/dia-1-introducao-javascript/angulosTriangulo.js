let alpha = 100;
let beta = 40;
let theta = 40;
let temNegativo = false;

let somaAngulos = alpha+beta+theta;

if (alpha < 0){
    console.log('Angulo alpha inválido.');
    temNegativo = true;
}

if (beta < 0){
    console.log('Angulo beta inválido.');
    temNegativo = true;
}

if (theta < 0){
    console.log('Angulo theta inválido.');
    temNegativo = true;
}

if (!temNegativo) {
    
    if (somaAngulos === 180){
        console.log('É um triangulo!!');
    }

}