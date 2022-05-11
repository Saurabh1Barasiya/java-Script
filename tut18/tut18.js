console.log("Reference vs Premitive"); 

let num = 10;
let num2 = num;
console.log(`value of num = ${num}`);
console.log(`value of num = ${num2}`);

console.log("After changing the value of num");
num = 20;
console.log(`value of num = ${num}`);
console.log(`value of num = ${num2}`);

// BOTH ARE DIFFRENT
// so this is a example of premitive data type


// now we work on reference types.
let arr = [1, 2, 3, 4];
let arr2 = arr;
console.log(`value of arr = ${arr}`);
console.log(`value of arr = ${arr2}`);
console.log("After changing the value of arr");
arr.push(30);
console.log(`value of arr = ${arr}`);
console.log(`value of arr = ${arr2}`);

console.log("Reference types data store in heap memory and primitive data types are stored in stack memory");

