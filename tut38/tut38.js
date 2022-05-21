console.log("Array.fill() method");

let myArray = new Array(10).fill(0);
console.log(myArray);

let arr = [1,2,34,5,6,7,8,9];

//arr.fill() --> value , start , end --- end is excluded.

arr.fill(0,2,5);
console.log(arr);