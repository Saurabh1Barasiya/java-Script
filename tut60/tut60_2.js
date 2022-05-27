console.log("document object model");

// select item by queryselector.

const main_heading = document.querySelector("#main-heading");
console.log(main_heading);
main_heading.innerText = "manage my side with my way";

const nav_item = document.querySelector(".nav-item");  // ye hame first item hi deta h.

console.log(nav_item);


const getItem = document.querySelector("div.headline h2");  // ye hame first item hi deta h.

console.log(getItem);

getItem.style.backgroundColor = "red";
getItem.style.color = "white";
getItem.style.padding = "5px";
getItem.style.margin = "10px";
getItem.style.border = "10px solid black";
getItem.style.borderRadius = "20px";
getItem.style.fontSize = "50px";
getItem.style.fontFamily = "sans-serif";
getItem.style.textAlign = "center";
getItem.style.textTransform = "uppercase";
getItem.style.textDecoration = "underline";
getItem.style.fontWeight = "bold";

// yaha ham (-) ki jagah  UpperCase ka use karte h.
// background-color -----> backgroundColor

