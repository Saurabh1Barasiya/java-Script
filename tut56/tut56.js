console.log("Inheritance in javascript");

class Animal{
    constructor(name, age){
            this.name = name;
            this.age = age;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
    eat(){
        console.log(`${this.name} eats`);
    }
}
// const obj = new Animal("Dog", 2);
// obj.speak();
// obj.eat();

class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age);  // Calling the constructor of the parent class.
        this.speed = speed;
    }
    run(){
        console.log(`${this.name} runs at ${this.speed} km/h and age is ${this.age}`);
    }
    eat(){
        // override the parent class method
        console.log(`${this.name} eats in modified style.`);
    }
}


const obj = new Dog("Dog", 2, 50);
obj.speak();
obj.eat();
obj.run();