// step-01 add event handelar to click submit button 

document.getElementById("btn-click").addEventListener("click",function(){
    
    // step-02 set email adderess
    // always remember .value to use get text
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   
//    step-03 get the password
const passField = document.getElementById('user-pass');
const pass = passField.value;

// step-04 verify the email and password
if( email === 'sontan@bap.com' && pass === '1234'){
   window.location.href='Bank.html';
}
    else{
        alert('invaild user')
    }


})

document.getElementById