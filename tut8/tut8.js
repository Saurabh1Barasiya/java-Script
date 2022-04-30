console.log("Hello World");

console.log(typeof null);
// bug.

let MyName;
console.log(typeof MyName);

let a = ""; // false
console.log(typeof a);

a = 0; // false
a = null;
a = undefined;
if (a) {
  console.log("a is true");
} else {
  console.log("a is false");
}
