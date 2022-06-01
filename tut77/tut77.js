const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// console.log(heading1, heading2, heading3, heading4, heading5, heading6, heading7, heading8, heading9, heading10);

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    });  
}

changeText(heading1, "one", "red", 1000)
.then(()=> changeText(heading2, "two", "yellow", 1000))
.then(()=> changeText(heading3, "three", "blue", 1000))
.then(()=> changeText(heading4, "four", "cyan", 1000))
.then(()=> changeText(heading5, "five", "purple", 1000))
.then(()=> changeText(heading6, "six", "green", 1000))
.then(()=> changeText(heading7, "seven", "orange", 1000))
.then(()=> changeText(heading8, "eight", "black", 1000))
.then(()=> changeText(heading9, "nine", "green", 1000))
.then(()=> changeText(heading10, "ten", "white", 1000))
.catch((err)=>{
    alert(err);
});


// ()=> "value"; // if ham aese likhte h to hamko return keyword ka use karne ki need nahi h.


// changeText(heading1, "one", "red", 1000)
// .then(()=>{
//     return changeText(heading2, "two", "yellow", 1000)
// })
// .then(()=>{
//     return changeText(heading3, "three", "blue", 1000)
// })
// .then(()=>{
//     return changeText(heading4, "four", "cyan", 1000)
// })
// .then(()=>{
//     return changeText(heading5, "five", "purple", 1000)
// })
// .then(()=>{
//     return changeText(heading6, "six", "green", 1000)
// })
// .then(()=>{
//     return changeText(heading7, "seven", "orange", 1000)
// })
// .then(()=>{
//     return changeText(heading8, "eight", "black", 1000)
// })
// .then(()=>{
//     return changeText(heading9, "nine", "green", 1000)
// })
// .then(()=>{
//     return changeText(heading10, "ten", "white", 1000)
// }).catch((err)=>{
//     alert(err);
// });
