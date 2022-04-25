"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animalClass_1 = require("./animalClass");
const tiger = new animalClass_1.Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const parrot = new animalClass_1.Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
const main = (animal) => {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
console.log('--------------------');
main(parrot);
parrot.fly();
