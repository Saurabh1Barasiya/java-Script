console.log("addEventListner");

// app jese hi button par click kere . uska color cjhange ho jaye.

const buttons = document.querySelectorAll(".container button")
console.log(buttons,typeof buttons,Array.isArray(buttons));
// NodeList(3) is not array.


buttons.forEach((item) => {
    item.addEventListener("click",(e)=>{
        console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color="red";
        e.target.style.padding = "10px";
        e.target.style.borderRadius = "10px";
    })
})