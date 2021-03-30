function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
GetType(aStr);
GetType(aNum);
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
