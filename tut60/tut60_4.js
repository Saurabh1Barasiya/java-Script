console.log("multiple selector using getElementsByClassName");

let allEle = document.getElementsByClassName("nav-item"); // it return HTMLcollection.

console.log(allEle,Array.isArray(allEle));
console.log(allEle[0]);
console.log(allEle[1]);
console.log(allEle[2]);

// HTMLcollection me ham foreach loop  use nahi kar sakte.

for(let item of allEle) {
    console.log(item, item.innerHTML, item.className,item.innerText);
}

console.log("------------------------------------");
// if i want to use forEach loop in HtmlCollection so.
Array.from(allEle).forEach((item) => {
    console.log(item, item.innerHTML, item.className,item.innerText);
});

// Array.from(allEle)  is used to convert HTMLcollection to array.

// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
// select multiple item using 

let nodeList = document.querySelectorAll(".nav-item"); // it return NodeList.
// node list me ham every loop ko use kar sakte h.
console.log(nodeList,typeof nodeList,Array.isArray(nodeList));
nodeList.forEach((item)=>{
    console.log(item);
});



// getElementByTagName
console.log("------------------------------------");
console.log("multiple selector using getElementByTagName");
let allEle1 = document.getElementsByTagName("a"); // it return HTMLcollection.
console.log(allEle1,Array.isArray(allEle1));

Array.from(allEle1).forEach((item) => {
    console.log(item,item.innerHTML,item.innerText);
});
Array.from(allEle1).forEach((item) => {
    // item.innerHTML = "<h1>Hello</h1>";
    // item.innerText = "Hello";
    // item.textContent = "Hello";

    // innerHTML and textContent are same.

    item.style.backgroundColor = "red";
    item.style.color = "white";
    item.style.padding = "10px";
    item.style.margin = "10px";
    item.style.border = "1px solid black";
    item.style.textDecoration = "none";
    item.style.fontSize = "20px";
    item.style.fontFamily = "sans-serif";
    item.style.fontWeight = "bold";
    item.style.textAlign = "center";
    item.style.lineHeight = "1.5";
    item.style.borderRadius = "10px";
});


// querySelector

let heading = document.querySelector(".headline");
console.log(heading);
heading.innerHTML = "<h1>Heading changed</h1>"
heading.innerHTML += "<button class=\"btn\">Lets change</button>";
console.log(heading);