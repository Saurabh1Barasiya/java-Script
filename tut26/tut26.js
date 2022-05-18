console.log("Welcome to tut26");
// Hoisting.


fun1();
// function fun1(){
//     console.log("Hello this is fun 1");
// }

// Ye javascript ka behavior hai 
// if ham function define karne ke pahle usko call kare to to run ho jayega.
// but function expression and arrow function ke case me run nahi hoga.


// Cannot access 'fun1' before initialization
// const fun1 = function(){
//     console.log("Hello this is fun 1");
// }


const fun1 = () =>{
    console.log("Hello this is fun 1");
}

// Cannot access 'fun1' before initialization