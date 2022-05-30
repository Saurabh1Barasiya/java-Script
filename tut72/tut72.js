const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const heading4 = document.querySelector(".heading-4");
const heading5 = document.querySelector(".heading-5");

setInterval(()=>{
    heading1.style.color = "red";
    heading1.style.fontSize = "50px";
    setInterval(()=>{
        heading2.style.color = "yellow";
        heading2.style.fontSize = "50px";  
        setInterval(()=>{
            heading3.style.color = "green";
            heading3.style.fontSize = "50px";
            setInterval(()=>{
                heading4.style.color = "purple";
                heading4.style.fontSize = "50px";
                setInterval(()=>{
                    heading5.style.color = "blue";
                    heading5.style.fontSize = "50px";  
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

// ye code samajne me kita tedious(ajib) lag raha h.