// function hello1111(){
//     console.log("Hello World");
// }

// javascript function ===> function + object.
// you can add your own properties.

// console.log(hello1111.name);

// hello object has name property wich gives you a function name.

function hello(){
    console.log("Hello World");
}

console.log(hello.name);
hello.myprop = "kese ho bhai";

console.log(hello.myprop);

hello.fun1 = function(){
    return "i am fun1";
}

hello.fun1();


// function give you free space.
// only function provide prototype property.

hello.prototype.fun2 = function(){
    return "i am fun2";
}

hello.prototype.xyz = "xyz"; 
console.log(hello.prototype);
