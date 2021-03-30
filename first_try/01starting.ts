// vars
var myName: string = "Albert";
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;


document.getElementById("tsStuff").innerHTML = "My name is " + myName;

document.write("myname is a " + typeof (myName) + "<br />");
document.write("myAge is a " + typeof (myAge) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("anything is a " + typeof (anything) + "<br />");

var strToNum: number = parseInt("5");

// interfaces
interface SuperHero {
    realName: String;
    superName: String;
}

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}

document.write("Super hero: " + superman.superName + " is: " + superman.realName + "<br />");

// arrays

var employeer: string[] = ["Bob", "Sally", "Sam"];
employeer.push("Alice")
employeer.forEach(element => {
    document.write(element);
    document.write('+');
});
document.write('<br />');

var superHeroes: SuperHero[] = [];
superHeroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});

// Conditional statements

let sampLet = 123;
var sampVar = 123;

if (true) {
    let sampLet = 456;
    sampVar = 456;
}

document.write("sampLet: " + sampLet + "<br />");
document.write("sampVar: " + sampVar + "<br />");


// loops

var randArray = [5, 6, 7, 8]
// print the indexs
for (let val in randArray) {
    document.write(val + "<br />");
}

// print the values diferencia entre "in" and "of"
var strArray = randArray.map(String);
for (let val of strArray) {
    document.write(val + "<br />");
}

// functions
var getSum = function (num1: number, num2: number, num3?: number): number {
    if (typeof num3 !== 'undefined') {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
var theSum1: number = getSum(5, 2);
document.write("5+2= " + theSum1 + "<br />");
document.write("5+2= " + getSum(5, 2, 1) + "<br />");

var sumAll = function (...nums: number[]): void {
    var sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    document.write("Sum: " + sum + "<br />");

}
sumAll(1, 2, 3, 4, 5);

var addOne = (x) => x + 1;
document.write("1+1= " + addOne(1) + "<br />");





