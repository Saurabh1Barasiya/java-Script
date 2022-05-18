console.log("Learn about objects");
const person = {
    name: "John",
    age: 30,
    hobbies: ["movies", "music"],
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
for(let hob of person.hobbies){
    console.log(hob);
}


// Language: javascript
// mostly we apply for in loop in Objects , Object.keys()
console.log("==========================================================");
for(let per in person){
    console.log(person[per]);
}
console.log(Object.keys(person)); // it gives array.
console.log(Object.values(person)); // it gives array.

console.log("==========================================================");
for(let per of Object.keys(person)){
    console.log(`${per} : ${person[per]}`);
}

console.log("==========================================================");
cars = [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
];

for(let car of cars){
    for(let c in car){
        console.log(`${c} : ${car[c]}`);
    }
}

// Object destructuring
const users = [
    {userId:1, name:"John", age:30,gender:"male"},
    {userId:1, name:"John", age:30,gender:"male"},
    {userId:1, name:"John", age:30,gender:"male"},
];

let [userId, name, age] = users;
console.log(userId, name, age);

let [userIds,,ages] = users;
console.log(userIds, ages);


const [{userId:f1},{name:f2},{age:f3}] = users;
console.log(f1,f2,f3);