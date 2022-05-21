console.log("here we know about iterable and object type.");
// iterable -- > jis par ham for loop laga sakte h.
// string and array are iterable.

let string = "Saurabh";
for(let val of  string){
    console.log(val);
}

const arr = [1,2,3,4,5,6];
for(let val of arr){
    console.log(val);
}


const personInfo = {
    name : "Saurabh",
    age : 25,
    address : "Pune"
}

// 👀👀👀👀👀👀👀👀👀👀
// for(let person of personInfo){
//     console.log(person);
//     // personInfo is not iterable
// }


// array like object .
// jinke paas length property hoti h or jinko ham index se get kar sakte h.vo array like object hota h.

console.log("String length "+string.length);
console.log("Array length "+arr.length);