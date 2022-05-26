console.log("Closure in javascript");


// 👀👀👀👀👀👀👀👀👀👀👀👀
// agar kisi function ke ander koi function h or function function ko return kar raha h.

// to return hone wala function apne saht outer function ke jo bhi variable h un sabko lekar return hota h.


function outer() {
    var name = "John";
    function inner() {
        console.log(name);
    }
    return inner;
}

const ans = outer();
ans();



function fun1(x){
    return function fun2(y){
        return x+y;
    }
}
const ans1 = fun1(1);
const ans2 = ans1(2);
console.log(ans2);


// 👀👀👀👀👀👀👀👀👀👀👀

function myFunction(power){
    return function(number){
        return number**power;
    }
}
const ans3 = myFunction(2);
const ans4 = ans3(3);
console.log(ans4);