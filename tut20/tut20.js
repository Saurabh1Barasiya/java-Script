console.log("All about for loops");

// traditional for loop
const arr = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [];
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
    arr1.push(arr[i].toString());
}
console.log("Array 1: ", arr1);

// for of loop  
const arr2 = ["Banana", "Orange", "Apple", "Mango"];
const arr3 = [];
for(let fruit of arr2){
    console.log(fruit.toLocaleLowerCase()); // Banana, Orange, Apple, Mango.
    arr3.push(fruit.toLocaleLowerCase());
}
console.log("Array 2: ", arr3);

// for in loop
const arr4 = ["Banana", "Orange", "Apple", "Mango"];
const arr5 = [];
for (let index in arr4) {   
    console.log(index); // 0, 1, 2, 3
    console.log(arr4[index]); // Banana, Orange, Apple, Mango
    arr5.push(arr4[index].toLocaleLowerCase());
}
console.log("Array 3: ", arr5);

