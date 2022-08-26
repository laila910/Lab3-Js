function calcuale(){
var count=Number(prompt('please enter how many number you want to get the sum of'));
var arrOfNumbers=[];
while(count){ 
    var number=Number(prompt(`enter your number of level ${count}`));
    arrOfNumbers.push(number);
    count--;
}
var sum=0;
for(var i=0;i<arrOfNumbers.length;i++){
    
sum =sum + arrOfNumbers[i];
}
var average = sum / arrOfNumbers.length;
alert(`the sum of the entered values equal to ${sum} and the average equal to ${average}`);

}