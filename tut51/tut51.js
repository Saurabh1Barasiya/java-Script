console.log("Object.create(obj)");
// first me hamne methods ko function ke ander rakha.
// secound me hamne method ke bahar rakha and function ke ander un methods ka 
// reference assign kiya.


//👀👀👀👀👀👀👀 now in this case.

const moreMethods = {
    getData : function(){
        return `${this.firstName} ${this.lastName} ${this.email} ${this.age}`;
    },

    is18 : function(){
        return this.age >= 18;
    }

}


function createUser(firstName, lastName, email, age){
    //   const user = {} // this is not good.  insted of this we can use Object.create(moreMethods)
    const user = Object.create(moreMethods); // this is good.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return user;
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

console.log(user3);