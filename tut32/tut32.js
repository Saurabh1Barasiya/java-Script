console.log("Function returning function");
function myFunc(){
    return function(){
        console.log("Hello World");
    }
}

const fun = myFunc();
fun();

const myfun1 = ()=>{
    const myfun2 = ()=>{
        return "return a function";
    }
    return myfun2;   
}

const value = myfun1();   
console.log(value());


