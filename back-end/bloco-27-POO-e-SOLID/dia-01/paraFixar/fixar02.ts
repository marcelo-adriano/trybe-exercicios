class TVDois {
    private _brand: string;
    private _size: number;
    private _resolution: number;
    private _connections: string[];
    private _connectedTo: string;

    constructor(brand: string, size: number, resolution: number, connections: string[], connectedTo: string) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        this._connectedTo = connectedTo;
    }

    turnOn() {
        console.log('ON!');
        console.log(`${this._brand}`);
        console.log(`${this._size}`);
        console.log(`${this._resolution}`);
        console.log(`${this._connections}`);
        console.log(`${this._connectedTo}`);
    }

    get connectedTo() {
        return this._connectedTo;
    }

    set connectedTo(newValue: string) {
        if (this._connections.includes(newValue)) {
            this._connectedTo = newValue;
        } else {
            console.log("Sorry, connection unavailable!");
        }
    }
}

const tvDos = new TVDois('CCE', 14, 480, ['vga', 'component', 'antena'], 'antena');

console.log(tvDos.connectedTo);
tvDos.connectedTo = 'vga';
console.log(tvDos.connectedTo);
tvDos.connectedTo = 'hdmi';
console.log(tvDos.connectedTo);
