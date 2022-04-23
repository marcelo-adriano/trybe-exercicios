"use strict";
class TV {
    constructor(brand, size, resolution, connections, connectedTo) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
        this.connectedTo = connectedTo;
    }
    turnOn() {
        console.log('ON!');
        console.log(`${this.brand}`);
        console.log(`${this.size}`);
        console.log(`${this.resolution}`);
        console.log(`${this.connections}`);
        console.log(`${this.connectedTo}`);
    }
}
const tvUno = new TV('CCE', 14, 480, ['vga', 'component', 'antena'], 'antena');
tvUno.turnOn();
