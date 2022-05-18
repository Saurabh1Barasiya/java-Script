console.log("Function inside function");
const myVar = "value";
const app = ()=>{
    // const myVar = "value";
    const greet = ()=>{
        console.log("Hello World");
        console.log(myVar);
    }
    const f1 = ()=>{
        console.log("This is f1 function");
        console.log(myVar);
    }
    const f2 = ()=>{
        const myVar = "inside f2";
        console.log("This is f2 function");
        console.log(myVar);
    }
    greet();
    f1();
    f2();
}
app();
