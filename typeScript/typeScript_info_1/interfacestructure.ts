interface IVihicle {
    Brand:string;
    Speed:number;
    FuelTank:number;

    GetFuelPriceTotal(way:number,unitPrice:number):number;
}

class Taxi implements IVihicle {
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal(way: number, unitPrice: number):number {
       return way*unitPrice;
    }

}

class Truck implements IVihicle{
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal(way: number, unitPrice: number):number {
        return way*unitPrice;
    }

}

let _taxi = new Taxi();
let _truck = new Truck();

_taxi.Brand = "BMW";
_taxi.FuelTank = 50;
_taxi.Speed = 250;
let message1:string = " TotalPrice " + _taxi.GetFuelPriceTotal(100,1.8);

_truck.Brand = "OPEL";
_truck.FuelTank = 60;
_truck.Speed = 200;
let message2:string = " TotalPrice " + _truck.GetFuelPriceTotal(100,1.2);

console.log(message1);
console.log(message2);