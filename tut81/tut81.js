console.log("Multiline request");

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();


xhr.open("GET", URL);
xhr.onload = function(){
    if(xhr.status === 200 && xhr.status < 300){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);

        console.log("==========");
        const xhr1 = new XMLHttpRequest();
        const URL1 = `${URL}/${data[0].id}`;
        console.log(URL1);
        xhr1.open("GET", URL1);
        xhr1.onload = ()=>{
                console.log("Success"); 
                const data2 = JSON.parse(xhr1.responseText);
                console.log(data2);
                console.log(data2.id);
                console.log(data2.title);
                console.log(data2.userId);
                console.log(data2.body);
        }
        xhr1.send(); // ye likhna important hai bina iske request send nahi hogi. 
    }else{
        console.log("Something went wrong");
    }
}
xhr.onerror = () => {
    console.log("Network Error");
};

xhr.send();