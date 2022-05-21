console.log("Method function inside object.");

function personInfo(){
        console.log(`first name: ${this.firstName} and last name: ${this.lastName}`);
}

const person = {
    firstName:"Saurabh",
    lastName:"Barasiya",
    // about:function(){
    //     console.log(`first name: ${this.firstName} and last name: ${this.lastName}`);
    // }
    about:personInfo
};


const person1 = {
    firstName:"amit",
    lastName:"nag",
    about:personInfo
};

const person2 = {
    firstName:"ramesh",
    lastName:"roy",
    about:personInfo
};

const person3 = {
    firstName:"tanu",
    lastName:"jain",
    about:personInfo
};

person.about();
person1.about();
person2.about();
person3.about();


