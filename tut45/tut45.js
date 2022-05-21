console.log("window object");
console.log(window);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     about:function(){
//         console.log(this);
//     }
// }

function getVal(){
    'use strict';
    console.log(this);
}
getVal();