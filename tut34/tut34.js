console.log("Map filter reduce and array sort methods");

let arr = [1,2,3,4,5,6,7,8,9,10];
const square = arr.map(x => x*x);   // map method
square.forEach((x,index) => console.log(index+1,x));

console.log(arr);
console.log(square);

// filter 👀

// filter method ==> here use true or false only.
const even = arr.filter((number)=>{
    return number % 2 === 0;
});
const odd = arr.filter((number)=>{
    return number % 2 !== 0;
});
console.log(odd);



// reduce method ==> reduce method is used to reduce the array to single value.
console.log(arr);
const sum = arr.reduce((acc,curr)=>{
    return acc + curr;
});

console.log(sum);




// sort method ==> sort method is used to sort the array in ascending <order className=""></order>
const arr1 = [120,45,78,90,34,56,67,78,90,12];
console.log(arr1.sort((a,b)=>{
    // ascending order
    return a-b;
}));

console.log(arr1.sort((a,b)=>{
    // ascending order
    return b-a;
}));


const products = [
    {producdId:1,producdName:'mobile',price:2000},
    {producdId:2,producdName:'laptop',price:4000},
    {producdId:3,producdName:'camera',price:6000},
    {producdId:4,producdName:'tv',price:3000},
    {producdId:5,producdName:'speaker',price:1000},
];

console.log(products);

const low = products.sort((a,b)=>{
    return a.price - b.price;
})
console.log(low);

const high = products.sort((a,b)=>{
    return  b.price-a.price;
})
console.log(high);