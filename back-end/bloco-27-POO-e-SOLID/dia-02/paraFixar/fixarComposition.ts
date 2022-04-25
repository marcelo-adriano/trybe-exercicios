interface Logger {
    log(frase: string): void;
}

class ConsoleLogger implements Logger{
    log(frase: string): void {
        console.log('Exemplo ruim', frase);
    }
}

class ConsoleLogger2 implements Logger{
    log(frase: string): void {
        console.log('Exemplo ruim 2', frase);
    }
}

interface Database {
    logger: ConsoleLogger;
    save(key: string, value: string): void;
}

class  ExampleDatabase implements Database {
    constructor(public logger: ConsoleLogger) {  }
    save(key: string, value: string) {
        this.logger.log(`${key} ${value}`)
    }
}

const loggerUm = new ConsoleLogger();
const loggerDois = new ConsoleLogger2();
const bancoUm = new ExampleDatabase(loggerUm);
const bancoDois = new ExampleDatabase(loggerDois);

bancoUm.save('coco', 'xixi');
bancoDois.save('xixi', 'coco');
