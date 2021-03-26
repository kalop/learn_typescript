// vars
var myName = "Albert";
var myAge = 41;
var canVote = true;
var anything = "dog";
anything = 2;
document.getElementById("tsStuff").innerHTML = "My name is " + myName;
document.write("myname is a " + typeof (myName) + "<br />");
document.write("myAge is a " + typeof (myAge) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("anything is a " + typeof (anything) + "<br />");
var strToNum = parseInt("5");
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
document.write("Super hero: " + superman.superName + " is: " + superman.realName + "<br />");
// arrays
var employeer = ["Bob", "Sally", "Sam"];
employeer.push("Alice");
employeer.forEach(function (element) {
    document.write(element);
    document.write('+');
});
document.write('<br />');
var superHeroes = [];
superHeroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});
// Conditional statements
var sampLet = 123;
var sampVar = 123;
if (true) {
    var sampLet_1 = 456;
    sampVar = 456;
}
document.write("sampLet: " + sampLet + "<br />");
document.write("sampVar: " + sampVar + "<br />");
// loops
var randArray = [5, 6, 7, 8];
// print the indexs
for (var val in randArray) {
    document.write(val + "<br />");
}
// print the values diferencia entre "in" and "of"
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}
// functions
var getSum = function (num1, num2, num3) {
    if (typeof num3 !== 'undefined') {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write("5+2= " + theSum1 + "<br />");
document.write("5+2= " + getSum(5, 2, 1) + "<br />");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    document.write("Sum: " + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5);
var addOne = function (x) { return x + 1; };
document.write("1+1= " + addOne(1) + "<br />");
