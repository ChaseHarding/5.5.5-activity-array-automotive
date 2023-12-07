//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
import Vehicle from './vehicleBaseClass.js'
class Car extends Vehicle {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
        this.isStarted = this.start();
    }
    loadPassenger(num) {
        this.passengers = num;
        return this.passengers < this.maxPassengers ? true : false;

        }
    
    start() {
        return this.fuel > 0 ? true : false;
    }
    scheduleService(mileage) {
        this.mileage = mileage
        return this.mileage > 30000 ? true : false
    }
}

const myCar = new Car("4", "2", "4", "120", "10", "");
console.log(myCar.isStarted);
console.log(myCar.scheduleService);
const banana = myCar.loadPassenger(2);
console.log(banana);










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
