console.log("This is a part of tut3.js");

// we always make variable using let keyword.
// let is block scoped.
// let is not hoisted.
// let is not accessible outside the block.
// let is not accessible outside the function.
// let is not accessible outside the loop.
// let is not accessible outside the conditional.
let a = 10;
// let a = 20;  //Uncaught SyntaxError: Identifier 'a' has already been declared

let b =  2;
console.log(a,b);


// const is also block scoped.
// const is not hoisted.
// const is not accessible outside the block.
// const is not accessible outside the function.
// const is not accessible outside the loop.
// const is not accessible outside the conditional.
const c = 10;
// const c = 20;  //Uncaught SyntaxError: Identifier 'c' has already been declared

// we cannot change the value of c because it is const.

console.log(c);

console.log("Addtion =", a+b);
console.log("Substraction =", a-b);
console.log("Deletion =", a*b);
console.log("Division =", a/b);
console.log("Modulus =", a%b);
console.log("Power =", a**b);
console.log("Square Root =", a**0.5);
console.log("Square Root =", 144**0.5);