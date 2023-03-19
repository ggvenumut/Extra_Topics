abstract class Department {
    DepartmentName:string;

    GetDepartmentName():void{
        console.log("Deparment Name : " + this.DepartmentName);
    }

    abstract GetDepartmentFloor(floor:number):void;
}

class ITDeparment extends Department{
    GetDepartmentFloor(floor: number): void {
        return console.log("Floor " + floor)
    }
}

let _ITDepartment = new ITDeparment();

_ITDepartment.DepartmentName = "IT";
_ITDepartment.GetDepartmentName();
_ITDepartment.GetDepartmentFloor(10);