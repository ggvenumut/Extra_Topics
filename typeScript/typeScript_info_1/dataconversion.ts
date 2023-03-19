let num1:string="12";
let num2:string="3";
console.log(parseInt(num1)+parseInt(num2));

// ---------

let num3:number=55;
console.log('result'+num3.toString());

let num4:any=45;
let message=(<string> num4); // let message = (num4 as string);
console.log(message);

