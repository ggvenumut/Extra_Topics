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
var Department = /** @class */ (function () {
    function Department() {
    }
    Department.prototype.GetDepartmentName = function () {
        console.log("Deparment Name : " + this.DepartmentName);
    };
    return Department;
}());
var ITDeparment = /** @class */ (function (_super) {
    __extends(ITDeparment, _super);
    function ITDeparment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITDeparment.prototype.GetDepartmentFloor = function (floor) {
        return console.log("Floor " + floor);
    };
    return ITDeparment;
}(Department));
var _ITDepartment = new ITDeparment();
_ITDepartment.DepartmentName = "IT";
_ITDepartment.GetDepartmentName();
_ITDepartment.GetDepartmentFloor(10);
