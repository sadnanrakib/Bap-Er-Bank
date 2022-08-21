// / step-01
document.getElementById('btn-withdraw').addEventListener('click',function(){
   
//    step -02
    const withdarwField = document.getElementById('withdraw-field');
   const newWithdarwAmountString  = withdarwField.value; 
   const newWithdrawAmount = parseFloat(newWithdarwAmountString);

// step -07
withdarwField.value = '';
if(isNaN(newWithdrawAmount)){
    alert('Please enter a vaild number');
}
// step-03
const withdrawTotalElement = document.getElementById('withdraw-total');
const perviousWithdrawTotalString = withdrawTotalElement .innerText;
const perviousWithdrawTotal = parseFloat(perviousWithdrawTotalString );




// step-04
currentWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;
// set the deposit total
withdrawTotalElement.innerText =  currentWithdrawTotal;

// step -05 get Balace 
const balaceTotalElement = document.getElementById('balace-total');
const perviousBalaceTotalString = balaceTotalElement.innerText;
const perviousBalaceTotal = parseFloat(perviousBalaceTotalString);


if(newWithdrawAmount > perviousBalaceTotal){
    alert('Ato taka nai');
    return;
}

// step-06
const currentBlace = perviousBalaceTotal - newWithdrawAmount;

balaceTotalElement.innerText = currentBlace;


})