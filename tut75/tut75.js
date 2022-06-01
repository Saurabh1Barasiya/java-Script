console.log("print value");
bucket = ["chips","banana","vagitables","rise","salt"];

function risePromise(){
    return new Promise((resolve, reject) => {
        let value = true;
        setTimeout(()=>{
            if(false){
                resolve();
            }else{
                reject();
            }
        },2000)
    });
}

risePromise().then(()=>{
    console.log("Promise Resolve");
}).catch(()=>{
    console.log("Promise Reject");
})

// but then bhi promise return karta h.