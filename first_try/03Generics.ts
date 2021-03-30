function GetType<T>(val: T): string{
    return typeof(val);
}

let aStr = "A String";
let aNum = 10;

GetType(aStr);
GetType(aNum);


class GenericNumber<T>{
    add: (val1: T,val2: T) => T;
}

var aNumber = new GenericNumber<number>();

aNumber.add = function(x,y){return x + y;}


