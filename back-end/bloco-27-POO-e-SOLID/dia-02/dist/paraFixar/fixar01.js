"use strict";
class Superclass {
    constructor(isSuper = true) { }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class Subclass extends Superclass {
}
function myFunc(objeto) {
    objeto.sayHello();
}
const objUm = new Superclass();
const objDois = new Subclass();
myFunc(objUm);
myFunc(objDois);
