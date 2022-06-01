console.log("Then also return a function");

console.log("Inside 1st then we must write return keyword");

function risePromise(){
    return new Promise((resolve, reject)=>{
        if(0){
            resolve("foo");
        }else{
            reject("can't go more");
        }
    });
}

risePromise().then((value)=>{
    console.log(value);
    value += " 1st then";
    return value;
}).then((value)=>{
    console.log(value);
    value += " 2nd then";
    return value; // yaha return likhna bhut jaruri h.
}).then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})