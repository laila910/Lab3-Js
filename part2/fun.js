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