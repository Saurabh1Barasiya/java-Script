const URL = "https://jsonplaceholder.typicode.com/postss";
const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", URL);
xhr.onload = function(){
    // if hamara status code 200 ke barabar and 300 se less h to ham error ko handle kar lege.
    if(xhr.status === 200 && xhr.status < 300){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(typeof data); // json data
        console.log(data);
    }else{
        console.log("Something went wrong");
    }
}
xhr.onerror = () => {
    console.log("Network Error");
};

xhr.send();