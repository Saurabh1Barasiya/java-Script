console.log("Array splice method.");
const arr = [
    {userId:1, name:"John", age:30,gender:"male"},
    {userId:2, name:"Mary", age:25,gender:"female"},
    {userId:3, name:"Peter", age:35,gender:"male"}
];


let arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr1);

// arr1.splice() // index , deleteValue count , insertvalue count , 
// ye return bhi karta h deleted value ko.


const a = arr1.splice(4,3,"inserted1","inserted2","inserted3","inserted4");
console.log("deleted item"+a);

console.log("new array"+arr1);