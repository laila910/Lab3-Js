function submitFun(username,password){
    // document.write("heelo");
    var userName=username.value;
    var pass=password.value;
    // console.log(username.value);
    // console.log(password.value);

      if((userName=="admin")&&(pass=="421$$")){
             alert("Welcome login success");
       } else if((userName!="admin")&&(pass=="421$$")){
    alert('your username is wrong,please try again');
     }else if((pass!="421$$")&&(userName=="admin")){
       alert('your password is wrong,please try again');
}else if((userName=="")&&(pass=="")){
    alert('your data is empty,please try again');
}else{
    alert('your password and username are wrong,please try again');

}


}

function calcFun(firstNo,op,secondNo){
var firstNumber=Number(firstNo.value);
var secondNumber=Number(secondNo.value);
var operator=op.value;
// alert(firstNumber);
// console.log(secondNumber);
// console.log(operator);


switch(operator){
    case 'sum':
        alert(firstNumber + secondNumber);
        break;
    case 'subtract':
        alert(firstNumber - secondNumber);
        break;
    case 'multi':
        alert(firstNumber * secondNumber);
        break;
    case 'division':
        alert(firstNumber / secondNumber);
        break;
    case 'moduls':
        alert(firstNumber % secondNumber);
        break;
   

}

}
       