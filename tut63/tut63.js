console.log("create node innerhtml textnode");
const ul = document.querySelector("ul");
console.log(ul);

const li = document.createElement("li");
li.textContent = "item 2";
ul.append(li);


// ====================================================.


const element = document.createElement("div");
// console.log(element);
element.textContent = "I am div tag";
console.log(element);
// ul.append(element); ye last me insert karta if you want to add in the begning.

ul.prepend(element);

console.log("===========================================");
// how to remove.

const ul1 = document.querySelector("ul li");  // ul ke ander li.
ul1.remove(); // item 1 is deleted.

// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀.
// add before.

const cont = document.querySelector(".cont");
console.log(cont);
const ele = document.createElement("li");
ele.textContent = "insert before div";
cont.before(ele);
cont.after(ele);