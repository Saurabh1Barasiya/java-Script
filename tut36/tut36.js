console.log("Every method");
// 👀👀👀👀👀👀👀👀👀👀
// it check all the value and return true if condition satisfied.
// let arr = [2,4,6,8,7,10]; // false
let arr = [2,4,6,8,10]; // true
let getVal = arr.every(function(number){
    return number % 2 === 0;
});

if(getVal){
    console.log(`The result is ${getVal} because all the value of array is even.`); 
}else{
    console.log(`The result is ${getVal} because one of the value of array is not even.`);
}

// 👀👀👀👀👀👀👀👀👀👀  please have a look here...
// every method check all the value and return true if condition satisfied else it return false.