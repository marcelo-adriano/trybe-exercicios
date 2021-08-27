const fraseComX = 'Tryber x aqui!'
const skills = ['bonito', 'cheiroso', 'carinhoso', 'companheiro', 'modesto'];

function marqueiUmX(palavra) {
    let arrayFrase = fraseComX.split(' ');
    const indexOfX = arrayFrase.indexOf('x');

    arrayFrase[indexOfX] = palavra;

    return arrayFrase.join(' ');
}

function fraseEsquisito(funcaoX) {
    const skillsOrdenadas = skills.sort();
    console.log(`${funcaoX} Minhas cinco principais habilidades são:`)
    for (let index = 0; index < skillsOrdenadas.length; index += 1) {
        console.log(`- ${skillsOrdenadas[index]}`);
    }
}

fraseEsquisito(marqueiUmX('palavra'));
