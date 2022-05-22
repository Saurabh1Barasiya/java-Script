const user1 = {
   key1 : "value1",
   key2 : "value2",
}

// const user2 = {
//     key3 : "value3"
// }

// console.log(user2.key3);

// // what if me user2.key1 ko acess karu?
// console.log(user2.key1);  // undifined


const user2 = Object.create(user1);
console.log(user2);
user2.key2 = "Unique";
user2.key3 = "Value3";

// abhi user2 empty object h but iske __proto__ property mein user1 object h
// user2.__proto__ = user1;
// to me ab user2.key1 ko acces kar sakta hu.


console.log(user2.key1);
console.log(user2.key2);
console.log(user2.key3);
console.log(user2.__proto__);

// __proto__ and [[prototype]] are same.
// prototype are diffrent.