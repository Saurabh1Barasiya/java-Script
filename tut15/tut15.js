console.log("tut15 break and continue");
for(let i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

for(let i = 0; i < 10; i++){
    if(i == 5){
        // skip and continue;
        continue;
    }
    console.log(i);
}
