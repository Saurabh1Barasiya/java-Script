console.log("All about dom");

console.dir(document);
console.log(document);

// how to get element by id.
let mainHeading  = document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// mainHeading.innerText = "manage my side.";

console.log(mainHeading);  //<h2 id="main-heading">Manage your tasks <span style="display: none">Hello</span> </h2>
console.dir(mainHeading); // they both are object.
console.log(mainHeading.innerText); //Manage your tasks.
mainHeading.innerText = "manage my side with my way";
console.log(mainHeading.innerHTML); // manage my side with my way.




