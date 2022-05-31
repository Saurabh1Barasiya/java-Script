console.log("about promises");

// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀.
// promises javascript ka function nahi h , ye hamko browser provide karta h.
// ye ashycronous type work karta h.
// promises hamesha mircotask queeue me add hota h.
// settimeput function callback queue me add hota h.

// to agar ham dekhe pahle kon execute hoga promises or settimeout 
// to pahle promises execute hoga kyoki ye mircotask queeue me add hota h.
// or mircotask queeue ki priority high hoti h.



// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
// promise ya to resove hoga ya  reject hoga.
// if promise resolve hota h to then function run hota h .
// if promise reject hota h to catch function run hota h.


bucket = ["chips","banana","vagitables","rise","salt"];

const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vagitables") && bucket.includes("rise") && bucket.includes("salt")){
        resolve("Fried Rise");
        // resolve takes all types value.
        // either string , array , object .
    }else(
        reject("can't make Fried Rise")
    )
});

friedRicePromise.then((value) =>{
    console.log(`lets eat ${value}`);
}).catch((err) =>{
    console.log(`Error ocured ${err}`);
});