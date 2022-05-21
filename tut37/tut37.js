console.log("Array.some() method");
const myArr = [1,3,5,7,9,10];

// 👀👀👀👀👀👀👀👀
// Array.some() method return true if a bhi value true hai else return false.

const myarr2 = [false, true, false, true, false, true, false, true];

console.log(myarr2.some((val)=>{
    return val;

    // ye true return karega because hamare array me true h.

    // agar 1 bhi value true h to return true👍👍👍👍👍👍👍
}));


const someValue = myArr.some((val)=>{
    return val%2===0;
    // 1 bhi value true h to true dega. otherwise false.
});

console.log(someValue);




const myarr3 = [true,true,true,true,true,true,true,true];
const getData = myarr3.every((val)=>{
    return val
});
console.log(getData);