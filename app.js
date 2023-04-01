var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.isRented()) {
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " is already rented."));
        }
        else {
            this.setRented(true);
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " has been rented."));
        }
    };
    Vehicle.prototype.return = function () {
        if (this.isRented()) {
            this.setRented(false);
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " has been returned."));
        }
        else {
            console.log("".concat(this.getMake(), " ").concat(this.getModel(), " is not rented."));
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, numSeats) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numSeats = numSeats;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 30000; // Rs30000/day for a car
    };
    Car.prototype.getNumSeats = function () {
        return this.numSeats;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, payloadCapacity) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.payloadCapacity = payloadCapacity;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 50000; // Rs50000/day for a truck
    };
    Truck.prototype.getPayloadCapacity = function () {
        return this.payloadCapacity;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, engineSize) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engineSize = engineSize;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 10000; // Rs10000/day for a motorcycle
    };
    Motorcycle.prototype.getEngineSize = function () {
        return this.engineSize;
    };
    return Motorcycle;
}(Vehicle));
// Testing the classes
var car = new Car('Honda', 'Civic', 2021, false, 800);
car.rent(); // Honda Civic has been rented.
car.return(); // Honda Civic has been returned.
var truck = new Truck('Ford', 'F-150', 2022, false, 2000);
truck.rent(); // Ford F-150 has been rented.
truck.return(); // Ford F-150 has been returned.
var motorcycle = new Motorcycle('Honda', 'CD125', 2020, false, 1200);
motorcycle.rent(); // Honda Cd125 has been rented.
motorcycle.return(); // Honda Cd125has been returned.
