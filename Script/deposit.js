
// step-01
document.getElementById('btn-deposit').addEventListener('click',function(){
   
//    step -02
    const depositField = document.getElementById('deposit-field');
   const newDepositAmountString  = depositField.value; 
   const newDepositAmount = parseFloat(newDepositAmountString);
// step-03
const depositTotalElement = document.getElementById('deposit-total');
const perviousDepositTotalString = depositTotalElement.innerText;
const perviousDepositTotal = parseFloat(perviousDepositTotalString);





// step-04
currentDepositTotal = perviousDepositTotal + newDepositAmount;
// set the deposit total
depositTotalElement.innerText =  currentDepositTotal;

// step -05 get Balace 
const balaceTotalElement = document.getElementById('balace-total');
const perviousBalaceTotalString = balaceTotalElement.innerText;
const perviousBalaceTotal = parseFloat(perviousBalaceTotalString);

// step-06
const currentBlace = perviousBalaceTotal + newDepositAmount;

balaceTotalElement.innerText = currentBlace;

// step -07
depositField.value = '';
})


// step-01 add EventHandler

// document.getElementById('btn-deposit').addEventListener('click',function(){
//     // console.log("okk")

//     // step-02
//     const depositField = document.getElementById('deposit-field');
//     const deposit = depositField.value;
// //  console.log(deposit)

// // step-03
// depositField.value ='';

// // step-04





// })