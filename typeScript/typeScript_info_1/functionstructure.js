function GetNumberAddition(num1, num2) {
    return "result " + (num1 + num2).toString();
}
console.log(GetNumberAddition(14, 25));
// console.log(GetNumberAddition("Hello",25));
function GetNumberAddition2(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return "result " + (num1 + num2).toString();
}
console.log(GetNumberAddition2());
function GetNumberAddition3(num1, num2) {
    if (num2 !== undefined)
        return "result " + (num1 + num2).toString();
    else
        return "result " + (num1).toString();
}
console.log(GetNumberAddition3(15));
function GetNumberAddition4() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    num.forEach(function (i) { return result += i; });
    return "Result" + result;
}
console.log(GetNumberAddition4(15, 20, 15, 48, 75));
