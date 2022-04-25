"use strict";
class ConsoleLogger {
    log(frase) {
        console.log('Exemplo ruim', frase);
    }
}
class ConsoleLogger2 {
    log(frase) {
        console.log('Exemplo ruim 2', frase);
    }
}
class ExampleDatabase {
    constructor(logger) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`${key} ${value}`);
    }
}
const loggerUm = new ConsoleLogger();
const loggerDois = new ConsoleLogger2();
const bancoUm = new ExampleDatabase(loggerUm);
const bancoDois = new ExampleDatabase(loggerDois);
bancoUm.save('coco', 'xixi');
bancoDois.save('xixi', 'coco');
