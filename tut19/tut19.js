console.log("How to copy an array");
const arr = ["Banana", "Orange", "Apple", "Mango"];
const arr1 = arr;
console.log(arr===arr1);   // true means both are same.

const arr2 = arr.slice(0);
console.log(arr===arr2);   // false means both are different.

const arr3 = [].concat(arr);
console.log(arr===arr3);   // false means both are different.

// one another way to copy an array

const arr4 = [...arr] // drefrensing operator
console.log(arr4)
console.log(arr===arr4);   // false means both are different.

console.log("=========================================================");
let newArr = [1,2,3,4,5,6];
let newArr1 = [7,8,9,10]; 
let newArr2 = [...newArr, ...newArr1,11,12,13,14];
console.log(newArr2);
