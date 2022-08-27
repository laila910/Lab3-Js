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

function phonebook(){
var operation = prompt('please enter your operation "add" or "search"');
var ContactsArray=[];

if(operation=='add'){
var contactname =String(prompt("please enter the name of the contact"));
var phonenumber=Number(prompt('please enter the phone number of the contact'));
var contactObj={};
contactObj.ContactName=contactname;
contactObj.phoneNumber=phonenumber;

for(var property in contactObj) {
    alert(property + "=" + contactObj[property]);
}
alert(`{"ContactName":${contactObj.ContactName},"phoneNumber":${contactObj.phoneNumber}}`);


ContactsArray.push(contactObj);
alert(ContactsArray.length);

alert(ContactsArray);


phonebook();

}else if(operation=='search'){
var searchContact=prompt("please enter what you search for");
alert(ContactsArray);
alert(ContactsArray.length);
for(var i=0;i<ContactsArray.length;i++){
    alert(ContactsArray[i]);
    for(var key in ContactsArray[i]){
        alert(ContactsArray[i].key);
        alert(key.includes(searchContact));
      
        if(ContactsArray[i].key.includes(searchContact)){   
            alert(`found your search`);  
                alert(`the full details of your search are ${ContactsArray[i].ContactName} and ${ContactsArray[i].phoneNumber}`);
        }   
    }
}
phonebook();

}

}
function areaCalc(){
    var area=0;
    var shapename=prompt('please enter the name of shape you want to calculate its\'array');
    switch(shapename){
        case 'circle':
            var r =parseInt(prompt('please enter the radius of circle'));
             area = Math.PI * Math.pow(r,2);
            alert(`the area of circle is ${area}`);
            break;
        case 'triangle':
            var b =parseInt(prompt('please enter your base'));
            var h=prompt('please enter your height');
            area = 0.5 * b *h;
            alert(`area of triangle is ${area}`);
            break;
        case 'square':
            var a = parseInt(prompt('please enter your length of side'));
            area = Math.pow(a,2);
            alert(`area of square equal to ${area}`);
            break;
        case 'rectangle':
            var l =parseInt(prompt('please enter your length'));
            var w =parseInt(prompt('please enter your width'));
            area = l*w;
            alert(`area of rectangle is ${area}`);
            break;
        case 'parallelogram':
            b = parseInt(prompt('please enter your base'));
            h = parseInt(prompt('please enter vertical height'));
            area=b*h;
            alert(`area of parallelogram equal to ${area}`);
            break;
        case 'trapezium':
            a =parseInt(prompt('please enter one of length of parallel side'));
            b =parseInt(prompt('please enter the second length of parallel side'));
            h=parseInt(prompt('please enter the height'));
            area=((1/2) *(a+b)) * h;
            alert(`area of trapezium equal to ${area}`);
        case 'ellipse':
            a =parseInt(prompt('please enter your minor axis'));
            b = parseInt(prompt('please enter your major axis'));
            area = Math.PI * (a/2) * (b/2);
            alert(`area of ellipse equal to ${area}`);
            break;



        
        
    }
}