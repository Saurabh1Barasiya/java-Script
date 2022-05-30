// JavaScript is a Synchronous programming language.
// and it is a single threated .

// console.log("first line");
// setTimeout(() => {
//     console.log("second line");
// },5000);// 5000 is the time in miliseconds --> 5 sec.
// console.log("last line");

console.log("first line");
setTimeout(() => {
    console.log("second line");
},0);// 5000 is the time in miliseconds --> 5 sec.
console.log("last line");

// ye Asynchronous  behavior h.

// setTimeout() => JavaScript ka nahi h browser ka h.

// bhale hi setTimeOut() function 0 ms ka dely lega but vo tab tak execute nahi hoga jab tak call stack khali nahi ho jata.

// matlab program ki sari line chane ke baad hi . 


// setInterval() => JavaScript ka nahi h browser ka h.
setInterval(() => {
    console.log(Math.floor(Math.random()*100));
},2000);


