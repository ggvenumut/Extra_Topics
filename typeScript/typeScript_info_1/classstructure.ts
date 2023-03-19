class Shop {
    productName:string;
    piece:number;
    unitPrice:number;

    constructor(_productName:string,_piece:number,_unitPrice:number){
        this.productName = _productName;
        this.piece = _piece;
        this.unitPrice = _unitPrice;
    }

    GetProductInfo():string
    {
        return "Product Namber " + this.productName + " Piece " + this.piece + " UnitPrice " + this.unitPrice + " Total " + (this.piece*this.unitPrice);
    }

}

// let data = new Shop();

// data.productName = "Apple";
// data.piece = 1000;
// data.unitPrice=12;

// console.log(data.GetProductInfo())

let data = new Shop("apple",100 , 20);
console.log(data.GetProductInfo())


