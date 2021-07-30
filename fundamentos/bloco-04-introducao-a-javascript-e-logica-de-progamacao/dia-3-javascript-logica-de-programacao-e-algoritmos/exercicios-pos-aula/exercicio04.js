//Depois, faça uma pirâmide com n asteriscos de base:

function inteiroAleatorio() {
    return Math.round(Math.random()*(15-3)+3);
}

let n = inteiroAleatorio();
let arrayDeAsterisco;

console.log(' - - - '+n+' X '+Math.round(n/2)+' - - - ')
if (n%2 !== 0) {

    for (let index = 0; index < n/2; index += 1) {
        arrayDeAsterisco = '';
        let numeroAsterisco = 1+(index*2);
        let numeroEspacos = n - numeroAsterisco;
    
        for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
            arrayDeAsterisco += ' ';
        }
        for (let indexTres = 1; indexTres <= numeroAsterisco; indexTres += 1) {
            arrayDeAsterisco += '*';
        }
        for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
            arrayDeAsterisco += ' ';
        }
        
        console.log(arrayDeAsterisco);
    }
    
} else {
    
    for (let index = 0; index < n/2; index += 1) {
        arrayDeAsterisco = '';
        let numeroAsterisco = 2+(index*2);
        let numeroEspacos = n - numeroAsterisco;

        for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
            arrayDeAsterisco += ' ';
        }
        for (let indexTres = 1; indexTres <= numeroAsterisco; indexTres += 1) {
            arrayDeAsterisco += '*';
        }
        for (let indexDois = 0; indexDois < numeroEspacos/2; indexDois += 1) {
            arrayDeAsterisco += ' ';
        }
        
        console.log(arrayDeAsterisco);
    }

}