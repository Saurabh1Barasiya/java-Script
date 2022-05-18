console.log("About functions.");
// functions are a way to group a series of statements together
// and to perform a task when called
// functions are also called procedures
// functions are also called functions
// functions are also called methods
// functions are also called functions
// functions are also called procedures
// functions are also called methods

// function with no parameters.
function name() {
    return "Hello my function";
}
const value = name();
console.log(value);



// function with parameters.
function name1(firstName, lastName) {
    return "Hello " + firstName + " " + lastName;
}

console.log(name1("Saurabh","Barasiya"));


function check(number){
    return number%2==0;
}
console.log(check(4));


// check value and return index.
function checkValue(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
arr = [1,4,5,23,45,84]
const val = checkValue(arr, 23);
if(val === -1){
    console.log("Not found"+val);
}else{
    console.log("Found at index: " + val);
}