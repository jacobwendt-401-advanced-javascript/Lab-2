'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js')

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const modelt = new VehicleClass.Car('model t');
console.log(modelt.name, modelt.drive(), modelt.stop());

const tronBike = new VehicleClass.Motorcycle('tron bike');
console.log(tronBike.name, tronBike.wheelie(), tronBike.stop());

// Implement a car and motorcycle using a Factory
