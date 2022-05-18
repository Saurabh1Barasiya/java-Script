console.log("default and rest parameters");


// rest parameters  args is a rest paramegter means array.
const sum = (...args) => {
    console.log(args,typeof args);
    console.log(Array.isArray(args));
    s = 0;
    for(let v of args) {
        s =s+v;
    }
    return s;
}
console.log(sum(1,2,3,4,5));

const add3 = (a,b,c=0)=>{
    return a+b+c;
}
console.log(add3(1,1));  // 3