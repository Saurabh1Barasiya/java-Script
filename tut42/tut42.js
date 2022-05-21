console.log("Object Map");
const person = new Map();
person.set("name", "John");
person.set("age", 30);
person.set(1,"hello");
person.set([1,2,3,4],"onetwothree");
console.log(person);

// 👀👀👀👀👀👀👀👀👀
// ham direct access nahi kar sakte.
console.log(person.name);
console.log(person['name']);

// 
console.log(person.get("name"));
console.log(person.get("age"));
console.log(person.get(1));

for(let val of person){
    console.log(val);
}


for(let [key,val] of person){
    console.log(key+'---'+val);
}


for(let val of person){
    console.log(Array.isArray(val));
    // it return true it means its array.
}



