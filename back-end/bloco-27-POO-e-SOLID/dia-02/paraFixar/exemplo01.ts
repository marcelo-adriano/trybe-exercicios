import { Mammal, Animal, Bird } from "./animalClass";

const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const parrot = new Bird( 'Papagaio', new Date(Date.parse('Jun 07, 2017')));

const main = (animal: Animal) => {
    console.log(animal.age);
}

main(tiger);
tiger.walk();
console.log('--------------------');
main(parrot);
parrot.fly();
