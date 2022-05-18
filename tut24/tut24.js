console.log("Function Expression");
// Assign a function expression to a variable.
const sayHi = function(){
    return "Hello i am function expression.";
}
console.log(sayHi());

const add = function(a,b,c){
    return a+b+c;
}
console.log(add(1,2,3));

const check = function(value){
    if(value > 0){
        return "positive";
    }else if(value < 0){
        return "negative";
    }else{
        return "zero";
    }
}
console.log(check(10));


// Language: javascript

const getIndex = function(arr,target){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

let index = getIndex([1,2,3,4,5],3);
if(index === -1){
    console.log("not found");
}else{
    console.log("found at index "+index);
}