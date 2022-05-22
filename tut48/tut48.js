console.log("Create user(object) using function.");

function createUser(firstName, lastName, email, age){
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.getData = function(){
        return `${this.firstName} ${this.lastName} ${this.email} ${this.age}`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;


    // but yaha kuch kami hai kya?
    // suppose we have 1000000 users to sabke liye hai ye dono method(getdata and is18) memory me jagah legi.
    // to bhut hi jyadha memory use hogi.

    // isko ham next part me dekhege.
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