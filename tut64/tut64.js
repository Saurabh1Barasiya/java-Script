console.log("know about event");

// this.
const button = document.querySelector("button")
// console.log(button);
button.addEventListener("click",function(){
    console.log("you just click in button");
    console.log(this);
    // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
    // it this case this ki value button hogi.

    // but arrow function ke case me window object hogi.

})


const allbuttons = document.querySelectorAll(".container button");
console.log("All buttons",allbuttons);

for(let button of allbuttons){
    button.addEventListener("click",function(){
        console.log("you clicked me");
        console.log(this.textContent);
    })
}