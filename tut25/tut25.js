console.log("Arrow functions");

// Arrow functions

// const sayHi = function(){
//     console.log("Hi");
// }

// const sayHi = ()=>{
//     console.log("Hi i am arrow function");
// }

const sayHi = ()=> console.log("Hi i am arrow function single liner");

sayHi();


const addTwoNumber = (a,b) => {
    return a+b;
}
console.log(addTwoNumber(2,3));


// when we have only single argment;
// function check(a){
//     return a>0;
// }
// console.log(check(-1));


const check = a=> a>0;

console.log(check(1));

const check2 = a=> a>0? a: a;
console.log(check2(-1));