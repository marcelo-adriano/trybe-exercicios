export class Animal {
    constructor(public name: string, private birthDate: Date) { }

    get age() {
        const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}

export class Mammal extends Animal {
    walk() {
        console.log(`${this.name} está andando!`);
    }
}

export class Bird extends Animal {
    fly() {
        console.log(`${this.name} está voando!`);
    }
}
