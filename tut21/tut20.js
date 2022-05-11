console.log("About Array destructuring");
const array = ["value1", "value2", "value3"];
let f1 = array[0];
let f2 = array[1];
let f3 = array[2];
console.log(f1, f2, f3);


const [first, second, third] = array;

console.log(first, second, third);
// Both are same...


// Skip middle value.
let [frst, , tird] = array
console.log(frst, tird);



const myArr = [1,2,3,4,5,6,7,8,9,10];
let [first1, ...rest] = myArr;
console.log(first1, rest);
// 1 single value,  rest array  [2,3,4,5,6,7,8,9,10].






