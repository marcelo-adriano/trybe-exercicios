"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = exports.Mammal = exports.Animal = void 0;
class Animal {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}
exports.Animal = Animal;
class Mammal extends Animal {
    walk() {
        console.log(`${this.name} está andando!`);
    }
}
exports.Mammal = Mammal;
class Bird extends Animal {
    fly() {
        console.log(`${this.name} está voando!`);
    }
}
exports.Bird = Bird;
