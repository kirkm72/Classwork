const fs = require('fs');
fs.readFile('bank.txt', 'utf8', function(err,data){
    if (err) {
        return console.log(err);
    }
})
const action = process.argv[2];
let num1 = process.argv[3];
let balance='';

console.log("this caculator script only accepts one operator plus 1 number input");

function convertToNum(x){
    num1 = parseFloat(x);
}

function deposit(x){
    balance = balance + x;
    fs.appendFile('bank.txt', ', +'+ x, function(err){
        if (err){
            console.log(err);
        }
    });
    return balance;
}

function withdrawal(x){
    let tempBalance = balance - x;
    if (tempBalance < 0){
        console.log('Insufficient funds');
    } else {
        balance = tempBalance;
        fs.appendFile('bank.txt', ', -'+ x, function(err){
            if (err){
                console.log(err);
            }
        });
        return balance;
    }
}

function balanceCheck(){
    return balance;
}