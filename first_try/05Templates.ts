// Templates
let multStr = `I go on for 
many lines</br>`;
document.write(multStr);

document.write(`<b>${multStr}</b>`)

//Spread operator
function theSum(x,y,z): void{
    document.write("Sum: " + (x + y + z) +"</br>");

}

let args = [4,5,6];

theSum(...args);

enum Emotion{
    Happy = 1,
    Sad,
    Angry
}

let myFeeling = Emotion.Happy;

myFeeling = 1;