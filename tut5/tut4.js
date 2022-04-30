console.log("Methods of Strings.");
console.log("Strings are immutable :: means change not possible !!!");
let firstName = "              MyName                 ";
console.log(firstName.length);

firstName = firstName.trim()
console.log(firstName.length);

console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.toString());

let secoundName = "Barasiya"
console.log(secoundName.charAt(0))
console.log(secoundName.charAt(secoundName.length-1));

console.log(secoundName.startsWith('B'));
console.log(secoundName.startsWith('a'));
console.log(secoundName.endsWith('a'));
console.log(secoundName.endsWith('f'));


// just check substring is present or not.
console.log(secoundName.includes("a"));
console.log(secoundName.includes("z"));

// replace first occurrence.
console.log(secoundName.replace('a', 'z'));

// slice a string first value is included but last value is excluded.
console.log(secoundName.slice(0,4));

// its search and return the index value.
console.log(secoundName.search('a'));
