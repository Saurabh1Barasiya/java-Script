console.log("create user using function modified");


const person = {
    getData: function(){
        return `${this.firstName} ${this.lastName} ${this.email} ${this.age}`;
    },
    is18:function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age){
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    // ham in function ko yaha define nahi karege.
    // user.getData = function(){
    //     return `${this.firstName} ${this.lastName} ${this.email} ${this.age}`;
    // }
    // user.is18 = function(){
    //     return this.age >= 18;
    // }


    user.getData = person.getData;
    // hamne yaha refrence assign kiya .

    user.is18 = person.is18;
    // hamne yaha refrence assign kiya .
    return user;

    // but yaha bhi kush kamiya h.
    // if hame koi new method add karna ho to pahle usko person name ke object me add karna hoga.
    // fir reference assign karna hoga.
}
const user1 = createUser("Saurabh","Barasiya","Saurah@gmail.com",24);
const user2 = createUser("Aman","nag","aman@gmail.com",10);
const user3 = createUser("ranu","jain","ranu@gmail.com",23);

console.log(user1.getData());
console.log(user1.is18());

console.log(user3.getData());
console.log(user3.is18());

console.log(user2.getData());
console.log(user2.is18());