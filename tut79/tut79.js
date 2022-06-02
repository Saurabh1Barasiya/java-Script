const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

console.log(xhr.readyState); // 0 means -- > client has been created not called yet.

// open() called means -- > 1 
xhr.open('GET',URL) // method and url

console.log(xhr.readyState); // called means -- > 1

// send() called means -- > 2 means send called headers and status are available.

// 3 means -- > loading.
// 4 means -- > done.
console.log("---------------");

// xhr.onreadystatechange = function(){

//     // 👀👀👀👀👀👀👀👀👀👀
//     // jab jab state change hogi tab tab ye function chalega.

//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         /*
//         console.log(xhr.readyState); // 4 means -- > done.
//         console.log(xhr.status); // 200 -- > ok
//         // console.log(xhr.responseText);
//         console.log(xhr.response);
//         console.log(typeof xhr.response); // string

//         // responseText and response both are same.
//         */

//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data); // json data
//         console.log(data);
//     } 

// }
// xhr.send();



// 👀👀👀👀👀👀👀
// xhr.onload = function(){} // ye tabhi chalta h jab readyState ki value 4 hoti h.
xhr.onload = function(){
    // 👀👀👀👀👀👀👀👀👀👀
    // ye tabhi chalta h jab readyState ki value 4 hoti h.

    console.log(xhr.readyState); // 4 means -- > done.
    // console.log(xhr.status); // 200 -- > ok
    // console.log(xhr.responseText);
    // console.log(xhr.response);
    // console.log(typeof xhr.response); // string
    // console.log(xhr.response);

    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(typeof data); // json data
    console.log(data);
}

xhr.send();