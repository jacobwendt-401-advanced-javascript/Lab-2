'use strict';

class Vehicle2 {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }
}

Vehicle2.prototype.drive = () => {
    return 'Moving Forward';
};

Vehicle2.prototype.stop = () => {
    return 'Stopping';
};

////////////////////////////////////////////////////////////////////////////////

class Car2 extends Vehicle2 {
    constructor(name) {
        Vehicle2.call(this, name, 4);
    }
}

class Motorcycle2 {
    constructor(name) {
Vehicle2.call(this, name, 2);
    }
    wheelie() {
return 'Wheee!';
    }
}

module.exports = {Car2, Motorcycle2};