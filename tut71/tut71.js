function calculatePerformance(firstNumber, secondNumber,onSucess,onFailure) {
    if(typeof firstNumber === 'number' && typeof secondNumber === 'number') {
        onSucess(firstNumber,secondNumber); // callback function
    } else {
        onFailure();
    }
}

// calculatePerformance("10","20",function(firstNumber,secondNumber){
//     console.log(firstNumber + secondNumber);
// },function(){
//     console.log('Invalid Input');
// });

// calculatePerformance("10","20",(num1,num2)=>{
//     console.log(num1 + num2);},()=>{
//         console.log('Invalid Input');
// }
// );

calculatePerformance(10,20,(num1,num2)=>console.log(num1 + num2),()=>console.log('Invalid Input'));
