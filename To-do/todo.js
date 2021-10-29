(function (){
var button = document.querySelector('.btn');
button.addEventListener("click", function(){
    var addValue,addlist, checkBox,deleteButton,editButton, span, sticker;
   addValue = document.querySelector('.input1');


   if(!addValue.value.trim()){
     return;
   };
   
addlist = document.createElement('li');
span = document.createElement('span')
checkBox = document.createElement('input');
checkBox.setAttribute("type", "checkbox");
span.textContent=addValue.value.trim();

span.style.paddingRight="11px";
checkBox.style.marginRight="10px";
addValue.value=""; 
console.log(addValue)

//edit button 

editButton= document.createElement("button");
editButton.textContent="Edit"
editButton.setAttribute('class', "editbtn");

//edit function

editButton.addEventListener("click", function(){
var newedit;
newedit= prompt('Abeg Edit task :', span.textContent)


if(!newedit.trim()){
  return;
}
span.textContent=newedit.trim();

});

// delete button 
deleteButton= document.createElement("button");
deleteButton.textContent="Delete"
deleteButton.setAttribute('class', "deletebtn");


//delete funtion 

deleteButton.addEventListener('click', function(){
var del;
 del= confirm('You sure so ?')

 if (del){
   sticker.removeChild(addlist)
 }


})


addlist.appendChild(checkBox)
addlist.appendChild(span)
addlist.appendChild(editButton)
addlist.appendChild(deleteButton)
 
sticker = document.querySelector('.sticker')


sticker.appendChild(addlist)


})




})(); 





(function (){
var Enter, des,num,tableRow,tableData,table,tableD;
Enter= document.querySelector('.sum')

Enter.addEventListener('click', function(){

num= document.querySelector('.textarea');
 des=  document.querySelector('.data');

 if(!num.value.trim()){
  return;
};
  
if(!des.value.trim()){
  return;
};





tableRow  = document.createElement('tr')
tableData = document.createElement("td")
tableD = document.createElement('td')
//tableData.setAttribute('class',"tdata")

tableData.textContent= num.value.trim()
tableD.textContent= des.value.trim()

    
num.value=""
des.value=''


tableRow.appendChild(tableData)
tableRow.appendChild(tableD)


table = document.querySelector('.jstable')

table.appendChild(tableRow)

})


})();






var turgu,cancel;
turgu= document.querySelector('#cool');
cancel=document.querySelector('#cancel');

turgu.addEventListener('click',function(){
  var paraG;
paraG =document.querySelector('#para');
paraG.style.display="block";
cancel.style.display="block"

})


cancel.addEventListener("click", function(){
  let paraG;
paraG =document.querySelector('#para');

  paraG.style.display="none"
  cancel.style.display="none"

})





