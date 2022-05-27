console.log("get and set attribute");
// get and set attribute
let a = document.querySelector("a");
console.log(a);
console.log(a.getAttribute("href").slice(1));
a.setAttribute("href", "#first"); 
console.log(a);




