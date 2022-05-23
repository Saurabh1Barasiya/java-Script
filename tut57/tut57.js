console.log("getter and setter");

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // getter 
    get fullname(){
        return `${this.name} ${this.age}`;
    }

    set fullname(fullname){
        let [first,last] = fullname.split(" ");
        this.name = first;
        this.age = last;
    }
}

const obj = new Person("Saurabh",25);
console.log(obj.fullname); // hame getter banaya tha to ham isko as a getter use karege . () ka use nahi karege.

// setter 
obj.fullname = "Amit nag";
console.log(obj.fullname);
console.log(obj);
