console.log("async await");

// async always returns a promise.
// await promiss ke resolve hone ka wait karta h.
// yaha par bhi catch tab hi chalega jab network related issue hoga.

// async function getData(){

// }

// console.log(getData());


const URL = "https://jsonplaceholder.typicode.com/posts";
async function getData(){
    const response = await fetch(URL);
    if(response.ok){
        const data = await response.json();
        // console.log(data);
        return data;
    }else{
        throw new Error("Something went wrong");
    }
}

getData()
.then(data => console.log(data))
.catch(err => console.log(err));