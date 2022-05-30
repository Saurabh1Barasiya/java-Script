console.log("setInterVal");
// setInterVal();

const body = document.body;
const button = document.querySelector("button");
console.log(body);
console.log(button);

const id = setInterval(() => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;


}, 1000);

button.addEventListener('click',(e)=>{
    clearInterval(id);
    button.textContent = body.style.backgroundColor;
});