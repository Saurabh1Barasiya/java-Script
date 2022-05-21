console.log("Set in Javascript");
// Set contains unique values
// Order not exist
// Set is not ordered
// Set is not indexed
// Set is iterable
// Set has own methods

let s1 = new Set([1,2,3,4,5,6,7,8,9,10]);
console.log(s1);
for(let val of s1){
    console.log(val);
}


let s2 = new Set("saurabh");
console.log(s2);

let s3 = new Set();
s3.add(1);
s3.add(2);
s3.add(3);
s3.add("s1");
s3.add("s2");
s3.add("s3");

console.log(s3);

let s4 = new Set();

// ham dono ko add kar rahe h but dono alag alag h kyoki hamne unko abhi assign nahi kiya hu.
s4.add([1,2,3]);
s4.add([1,2,3]);

let a = [1,2,3];
s4.add(a);
s4.add(a);
s4.add(a);

// ab add nahi hoga.
console.log(s4);

if(s1.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

console.log(s4);
console.log(s4.keys());
console.log(s4.values());
console.log(s4.entries());
console.log(s4.size);
console.log(s4.clear());
console.log(s4);
