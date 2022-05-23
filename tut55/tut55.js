// concept of class.

// function CreateUser(firstName, lastName, email, age){
//     // jab ham new keyword ka use karte h to hamko yaha this ki need hogi.
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
// }
// // function provide free space means -- > object.
// CreateUser.prototype.getData = function(){
//     return `${this.firstName} ${this.lastName} ${this.email} ${this.age}`;
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function(){
//     return "la la la";
// }
class CreateUser{
    constructor(firstName, lastName, email, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    getData(){
        return `${this.firstName} ${this.lastName} ${this.email} ${this.age}`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la";
    }
}

const user1 = new CreateUser("Saurabh","Barasiya","Saurah@gmail.com",24);
const user2 = new CreateUser("Aman","nag","aman@gmail.com",10);
const user3 = new CreateUser("ranu","jain","ranu@gmail.com",23);

console.log(user1.getData());
console.log(user1.is18());

console.log(user3.getData());
console.log(user3.is18());

console.log(user2.getData());
console.log(user2.is18());
console.log(user2.sing());

console.log(user1);

// concept of class.