console.log("Here we learn aobut classList ");

const ul = document.querySelector(".myList");
console.log(ul);

// now i want to know how many class it has.
console.log(ul.classList);
ul.classList.add("ownList");
console.log(ul.classList);

ul.classList.toggle("bg-dark");  // if class exist nahi karti to us class ko add kar dega and if class exist karti h to us class ko remove kar dega.
console.log(ul.classList);
ul.classList.toggle("bg-dark");
console.log(ul.classList);