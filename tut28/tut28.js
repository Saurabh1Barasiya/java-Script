console.log("Block scope and function scope");


// Block scope.
// let and const is a block scope.

// var is a function scope.


{
    let a = 1;
    var b = 2;
    const c = 3;
    console.log(a);
    console.log(c);

}

{
    console.log(a) // a is not present here 
    console.log(b);
    console.log(c); // c is not present here.
}