console.log("Apply promiss");

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();


function returnPromise(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status === 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject("Something went wrong");
            }
        };
        xhr.onerror = () => {
            reject(xhr.statusText);
        };
        xhr.send();
    });
}

// then also return a promise.
returnPromise("GET", URL)
    .then(data => JSON.parse(data))
    .then(data => {
        const id = data[0].id;
        return id;
    }).then(id => {
        const URL2 = `${URL}/${id}`;
        return returnPromise("GET", URL2);
    })
    .then(data => {
        const orignalData = JSON.parse(data);
        console.log(`ID : ${orignalData.id}`);
        console.log(`UserId : ${orignalData.userId}`);
        console.log(`Title : ${orignalData.title}`);
        console.log(`Body : ${orignalData.body}`);
    })
    .catch(err => {
        console.log(err);
    });



