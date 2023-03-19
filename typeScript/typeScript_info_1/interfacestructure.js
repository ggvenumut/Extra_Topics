var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.GetFuelPriceTotal = function (way, unitPrice) {
        return way * unitPrice;
    };
    return Taxi;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.GetFuelPriceTotal = function (way, unitPrice) {
        return way * unitPrice;
    };
    return Truck;
}());
var _taxi = new Taxi();
var _truck = new Truck();
_taxi.Brand = "BMW";
_taxi.FuelTank = 50;
_taxi.Speed = 250;
var message1 = " TotalPrice" + _taxi.GetFuelPriceTotal(100, 1.8);
_truck.Brand = "OPEL";
_truck.FuelTank = 60;
_truck.Speed = 200;
var message2 = " TotalPrice" + _truck.GetFuelPriceTotal(100, 1.2);
console.log(message1);
console.log(message2);
