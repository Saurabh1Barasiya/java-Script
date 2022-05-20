console.log("Object Destructuring ✔✔✔");

const person = {
    name: "John",
    age: 30,
    location: 'New York'
};

function objectDestructuring({name, age,location}) {
   // maximum use in react application .

    // const { name, age } = person;
    console.log(`Name is ${name}, age is ${age} and location is ${location}`);
}

objectDestructuring(person);