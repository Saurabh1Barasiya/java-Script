console.log("About Arrays");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

// convert array to string
console.log(fruits.toString());

// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

// join with a single space.
console.log(fruits.join(" "));


// The pop() method removes the last element from an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
console.log("popped value",fruit);
console.log(fruits);

// The push() method adds a new element to an array (at the end):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// The push() method returns the new array length:
fruits.push("Kiwi");
console.log(`After push: ${fruits}`);

let length = fruits.push("Kiwi");
console.log(`After push: ${fruits}`);
console.log(`Length: ${length}`);


// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.shift()
console.log(fruits1);


fruits1.unshift("Lemon");
console.log(fruits1);

// chabge the value of an array element 
fruits1[0] = "aam";
console.log(fruits1);



// Warning !
// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits2[0];
console.log(fruits2);



// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(`Before concat: ${myChildren} and length: ${myChildren.length} ${typeof myChildren}`);

console.log(Array.isArray(myChildren));
console.log(myChildren);


// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments:

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildrens = arr1.concat(arr2, arr3);
console.log(myChildrens);

// The concat() method can also take strings as arguments:
const final = arr1.concat("hello saurabh");
console.log(final);

// 


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi"); // it removes the element.

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

console.log(fruits3);


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 2, "Lemon", "Kiwi");
            // index, how many to remove, what to add.
console.log(fruits4);

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.splice(0, 1);
console.log(fruits6);


// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array.

// This example slices out a part of an array starting from array element 1 ("Orange"):

const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus7 = fruits7.slice(1);
console.log(citrus7);

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

const fruits8 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits8.slice(3);
console.log(citrus);    // ["Apple", "Mango"]


const fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus9 = fruits9.slice(1, 3); // it will return the array from index 1 to 3. but not 3 , 3 is excluded.
console.log(citrus9);   // ["Orange", "Lemon"]

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits10.toString();
