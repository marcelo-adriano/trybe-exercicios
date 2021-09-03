function acordar() {
    return 'Acordando!!';
}

function cafeDaManha() {
    return 'Bora tomar café!!'; 
}

function dormir() {
    return 'Partiu dormir!!'; 
}

function doingThings(callback) {
    console.log(callback());
}

doingThings(acordar);
doingThings(cafeDaManha);
doingThings(dormir);