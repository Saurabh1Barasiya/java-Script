console.log("closure");
 

function outer() {
    let check = false;
    return function(){
        if(check===false) {
            console.log("hello you called me.");
            check = true;
        }else{
            console.log("you already called me.");
        }
    }
    
}

const ans = outer();
ans();  // hello you called me.
ans();  // hello you called me.
ans();  // hello you called me.
ans();  // hello you called me.