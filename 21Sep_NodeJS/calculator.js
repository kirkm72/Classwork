const operator = process.argv[2];
let num1 = process.argv[3];
let num2 = process.argv[4];
let answer='';
console.log("this caculator script only accepts one operator plus 2 number inputs")

function convertToNum(x,y){
    num1 = parseFloat(x);
    num2 = parseFloat(y);
}

function add(x,y){
    answer = x+y;
    return answer;
}

function subtract(x,y){
    answer = x-y;
    return answer;
}

function multiply(x,y){
    answer = x*y;
    return answer;
}

function divide(x,y){
    answer =x/y;
    return answer;
}

function remainder(x,y){
    answer = x%y;
    return answer;
}

convertToNum(num1,num2);

if (operator === "add"){
    add(num1,num2);
}
if (operator === "subtract"){
    subtract(num1,num2);
}
if (operator === "multiply"){
    multiply(num1,num2);
}
if (operator === "divide") {
    divide(num1,num2);
}
if (operator === "remainder"){
    remainder(num1,num2)
}
console.log(answer);