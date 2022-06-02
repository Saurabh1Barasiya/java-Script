console.log("Fetch api");
const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL) -- > promiss return karta h.
// fetch(URL).then(response => response.json()) -- > promiss return karta h.
// matlab response.json() bhi promiss return karta h.

// console.log( fetch(URL)) // by default GET

// fetch only network ke case me reject hoga.

// fetch(URL)
// .then((response)=>{
//     console.log(response);
//     console.log(response.ok); // true or false
//     // if url me issue h to false otherwise true
//     // console.log(response.json());
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })



fetch(URL)
.then((response)=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Network error");
    }
})
.then(data=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

// in case of fetch -- > catch tabhi chalega jab network related kuch issue hoga.