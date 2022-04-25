class Superclass {
    constructor(isSuper: boolean = true) {  }
    sayHello() {
        console.log('Olá mundo!');
    }
}

class Subclass extends Superclass {

}

function myFunc(objeto: Superclass) {
    objeto.sayHello();
}

const objUm = new Superclass();
const objDois = new Subclass();

myFunc(objUm);
myFunc(objDois);
