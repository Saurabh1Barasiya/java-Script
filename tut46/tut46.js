console.log("Call method");

const user = {
    firstName: "amit",
    lastName: "nag",
    about:function(){
        console.log(`firstname ${this.firstName} and  lastname ${this.lastName}`);
    }
}

const user1 = {
    firstName: "aman",
    lastName: "sahu",
}

user.about.call(user);

// user1 ke pass about method nahi h fir bhi usko call() method use karke kar sakte h.

function greet(){
    console.log(`Hello ${this.name} ${this.lastName}`);
}

const person1 = {
    name : "John",
    lastName:"due",
    
}
const person2 = {
    name : "pukit",
    lastName:"pol",

}

// ye hamesha 1 function return karta h.
const func = greet.bind(person2);
func();



// -----------------------------apply----------------------------------.
function greet(location,work){
    console.log(`Hello ${this.name} ${this.lastName} from ${location} and work is ${work}`);
}

const person11 = {
    name : "John",
    lastName:"due",
    
}
const person21 = {
    name : "pukit",
    lastName:"pol",

}

greet.apply(person11,["chhindwara","software engineer"]);
