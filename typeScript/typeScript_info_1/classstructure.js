var Shop = /** @class */ (function () {
    function Shop(_productName, _piece, _unitPrice) {
        this.productName = _productName;
        this.piece = _piece;
        this.unitPrice = _unitPrice;
    }
    Shop.prototype.GetProductInfo = function () {
        return "Product Namber " + this.productName + " Piece " + this.piece + " UnitPrice " + this.unitPrice + " Total " + (this.piece * this.unitPrice);
    };
    return Shop;
}());
// let data = new Shop();
// data.productName = "Apple";
// data.piece = 1000;
// data.unitPrice=12;
// console.log(data.GetProductInfo())
var data = new Shop("apple", 100, 20);
console.log(data.GetProductInfo());
