export class Computer {
    constructor(brand, model, ram = 4, hardDrive = 512, screenSize = 17) {
        this.brand = brand
        this.model = model
        this.ram = ram
        this.hardDrive = hardDrive
        this.screenSize = screenSize
    }

    toString() {
        return `${this.brand} ${this.model}, RAM: ${this.ram}GB, Hard Drive: ${this.hardDrive}GB, Screen: ${this.screenSize} inches`
    }
}

export class Laptop extends Computer {
    constructor(
        brand,
        model,
        ram = 4,
        hardDrive = 256,
        screenSize = 12,
        batteryLife = 4
    ) {
        super(brand, model, ram, hardDrive, screenSize)
        this.batteryLife = batteryLife
    }

    toString() {
        return `${super.toString()}, Battery Life: ${this.batteryLife} hours`
    }
}
