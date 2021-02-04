'use strict';
let firstName = 'Saurabh';
let secondName = "Barasiya";
let middleName = `kumar`

console.log(firstName,middleName,secondName)

console.log("My name is ",firstName)

console.log("length of firstName is",firstName.length)


let age = 21

// let newStr = "I am " + firstName + " and i am " + age + " years old"
// console.log(newStr)


// template string.
// let newStr = `I am ${firstName} and i am ${age} years old.`;
// console.log(newStr);


// Escape character
// let newStr = "I' am saurabh";
// let newStr = "I\'m saurabh";
// let newStr = "I\" am saurabh";

let newStr = "Happiness is only real when shared."

console.log(newStr)



// string indexing.

// let firstName = "Saurabh";
console.log(firstName[0]);
console.log(firstName[3]);
console.log(firstName[(firstName.length)-1]);


// string sclicing 

console.log(firstName.slice(0,2));
// last value is exclude ,
console.log(firstName.slice(0,8));


// both index are include.
console.log(firstName.substr(0,4));

// both index are include.
console.log(firstName.substring(0,5));

let change = "HELLO BRO";
console.log(change.toLowerCase());
console.log(change.toUpperCase());

