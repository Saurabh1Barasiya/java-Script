console.log("function callback");

function myFunc(){
    console.log("I am callback function");
}

function myFunccall(callback){
    console.log("I called to callback function");
    callback();
}

myFunccall(myFunc);


// callback function 👀


function add(a,b){
    console.log(`Sum of ${a} and ${b} is ${a+b}`);
}

function getvalue(callback){
    let a = Number.parseInt(prompt("Enter first value"));
    let b = Number.parseInt(prompt("Enter secound value"));
    callback(a,b);
}

getvalue(add);