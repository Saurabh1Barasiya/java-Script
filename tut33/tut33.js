console.log("Foreach loop");

const numbers = [10,20,30,450,60,48,0960];
// foreach loop takes a function as an argument

numbers.forEach(function(number){
  console.log(number);
});

const numbers1 = [1,2,3,4,5,6,7,8,9,10];
numbers1.forEach(element => console.log(element));

const person = [
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'ani', lastName: 'piu'},
    {firstName: 'jane', lastName: 'doe'},
    {firstName: 'amy', lastName: 'lli'},
]

person.forEach(element => console.log(element.firstName));
console.log("🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳");
person.forEach((user,index)=>{
    console.log(index,user.firstName);
});

// we use for of loop also  👀👀👀

console.log("🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳");
for(let user of person){
    console.log(user.firstName[0]);
}
