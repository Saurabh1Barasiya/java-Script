'use strict';
let num = 12.3;
console.log(num);



console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 2^53 - 12   
console.log(Math.PI);


// ---------------------------------------------------------------------
console.log(12+2);
console.log(12/2);
// reminder
console.log(12%5);

// Power
console.log(2**3);
console.log(2**0.5);
console.log(4**4);

// Presedence and accsovity 
console.log(2+3*5)

// Presedence   associtvity   
    // (),      -------------
    // **,      right to left   
    // */%,     left to right 
    // +-       left to right

let num1 = 1e3;      
// 1  * 1000
console.log(num1);

let num2 = 2e-3;
// 2 / 1000
console.log(num2);


// Number seperator           
// let num3 = 10_000;
// console.log(num3);

// let num4 = 0 
// console.log(num4+1)
// num4++ 
// console.log(num4)   


let num4 = 4;
// postfix -- pehle print then increment
console.log(num4++);  
console.log(num4);

// pehle print then decrement   
console.log(num4--);  
console.log(num4);

let num5 = 5;
// prefix  -- > first decrement then print.
console.log(--num5) ;
console.log(num5);


// Mixing string and number  
// let n1 = 12 ; // str "12"  
// let n2 = "12" ;
// console.log(n1+n2)


// let n1 = 12 ;
// let n2 = "10";  // int 10 
// console.log(n1-n2);

// let  s = "hello";  
// console.log(n1+s) //output string



// let n1 = 12 ;
// let n2 = "10";  // int 10 
// console.log(n1+parseInt(n2));

// let num6 = parseInt(13.23);
// console.log(num6);
// let num7 = parseFloat(13.23);
// console.log(num7);

// String number se start hogi to usko parse kar dega.
let num8 = parseInt("12hello");
console.log(num8)
// String number se start nahi hogi to usko parse pahi kar payega.
let num9 = parseInt("he12llo");
console.log(num9)

// typeof  operator     
console.log(typeof num9) ;
console.log(typeof 10) ;
console.log(typeof "saurabh") ;
console.log(typeof 41.10) ;

// null and undefined.

let num10;
console.log(num10);
let num11 = null;
console.log(num11);


// Math object
// let num12 = 12.2          
let num12 = 12.5         
console.log(Math.round(num12))

// floor 
let num13 = 12.5  // gives down value       
console.log(Math.floor(num13))

// ceil
let num14 = 12.5  // gives up value       
console.log(Math.ceil(num14))

// abs
let num15 = -12.14;
console.log(Math.abs(num15))

console.log(Math.min(10,20,30));
console.log(Math.max(10,20,30));

// genrate ranndom integers  using js          
let  randomNumber = Math.random(); // 0-1 
console.log(randomNumber)  // 1 kabhi nahi aayega


let  randomNumber1 = Math.random()*10; // 0-10
console.log(randomNumber1) // 10 kabhi nahi aayega.


let minNumber = 5 ;
let maxNumber = 10 ;

let randomNumber2 = Math.random() * (maxNumber - minNumber) + minNumber;
console.log(randomNumber2);

// Big int

let bigNumber = 9007199254740991n;
bigNumber = bigNumber+2n;
console.log(bigNumber);

let big = BigInt(12);
console.log(big);

console.log(1/0);
console.log(-1/0);



