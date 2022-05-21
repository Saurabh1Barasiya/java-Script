console.log("Optional chaining");
const user = {
    name: "John",
    address: {housenumber:'1234'}
}


console.log(user?.name);
console.log(user?.address?.housenumber);
