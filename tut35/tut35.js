console.log("Here we know about Array find method concept");

let arr = [1,10,5,7,8];

// find method take function as argument.
// if function return true then it will return the value of that index.
// if function return false then it will return undefined.

// 👀👀👀 ye hame value return karna h.




function checkEven(number){
    return number % 2 === 0;
}

const value = arr.find(checkEven);
console.log(value);


// 👀👀👀 Array.find() hame value return karna h.

const myArr = [
    {"productId":1,producdName:"Laptop",price:10000},
    {"productId":2,producdName:"Mobile",price:20000},
    {"productId":3,producdName:"TV",price:30000},
    {"productId":4,producdName:"Fridge",price:40000},
    {"productId":5,producdName:"Washing Machine",price:50000},
]

// 👀👀 basicly jab hamko unique values ko find out karna rahta to ham array.find() method use karke hame value return karna h.

const getValue = myArr.find((obj)=>{
    return obj.productId === 3;
});

console.log(getValue);


// 👀👀👀 if  i want to find Fridge.
const getValue1 = myArr.find((obj)=>{
    return obj.producdName === "Fridge";
});
console.log(getValue1);


// 👀👀👀 if i want length 3 data...
let myArrr = ["Banana", "Orange", "Apple", "Mango","cat"];

//  👀👀 i want cat.
const getValue3 = myArrr.find((val)=>{
    return val.length === 3;
})

console.log(getValue3); //✌✌✌✌✌✌✌✌ we got value. 



// 👀👀👀 if i want lenght 5 data .
const getValue4 = myArrr.find(val => val.length === 5);

console.log(getValue4); //