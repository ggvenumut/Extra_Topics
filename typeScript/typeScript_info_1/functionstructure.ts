function GetNumberAddition(num1:number , num2:number):string{
    return "result " + (num1+num2).toString();
}
console.log(GetNumberAddition(14,25))
// console.log(GetNumberAddition("Hello",25));

function GetNumberAddition2(num1:number=0 , num2:number=0):string{
    return "result " + (num1+num2).toString();
}
console.log(GetNumberAddition2())



function GetNumberAddition3(num1:number , num2?:number):string{
    if(num2 !== undefined)
    return "result " + (num1+num2).toString();
    else
    return "result " + (num1).toString();

}
console.log(GetNumberAddition3(15))


function GetNumberAddition4(... num:number[]):string{
   let result:number=0;

   num.forEach((i)=>result += i);
   
   return "Result " + result;

}
console.log(GetNumberAddition4(15,20,15,48,75))