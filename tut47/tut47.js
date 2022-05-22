console.log("Know more arrow functions");
//👀👀👀👀👀👀👀👀👀👀👀
// if app object ke ander arrow function ka use karte h toh arrow function ke ander this exist nahi karta .
// if app object ke ander arrow function ka use karte h toh arrow function ke ander this exist karta .

// this apko normal function me hi milega  .

const person = {
    name: "sachin",
    age: 30,
    about : ()=>{
        console.log(this); // this yaha window object h . ye arrow function ke case me hoga.
        console.log(this.name,this.age);
    }
}

person.about();



const person1 = {
    name: "sachin",
    age: 30,
    about : function(){
        console.log(this); // this yaha person object h . ye normal function ke case me hoga.
        console.log(this.name,this.age);
    }
}

person1.about();