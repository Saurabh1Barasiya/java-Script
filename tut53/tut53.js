console.log("Prototype");

function createUser(firstName, lastName, email, age){
    const user = Object.create(createUser.prototype); 
    // yaha hamne proto set kiya h .[prototype ko.]
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return user;
}
// function provide free space means -- > object.
createUser.prototype.getData = function(){
    return `${this.firstName} ${this.lastName} ${this.email} ${this.age}`;
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}
createUser.prototype.sing = function(){
    return "la la la";
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
console.log(user2.sing());

console.log(user1);
console.log(user1.__proto__);

console.log(createUser.prototype);