console.log("Body color changing project");


let body = document.body;
const button = document.querySelectorAll(".container button");
// console.log(button);
button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let h1 = document.querySelector("h1");
        h1.textContent = `rgb(${red},${green},${blue})`
        body.style.background=`rgb(${red},${green},${blue})`;
    })
})