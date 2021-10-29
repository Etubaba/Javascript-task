// document.getElementById('count-el').innerText=8



let countEl =document.getElementById('count-el')
let count =0
function increment (){
 count+= 1
countEl.innerText=count
// if (count<0) {
//     document.getElementById("count-el").style.color = "red" 
// } else{
// document.getElementById("count-el").style.color = "green" 
// }
}

function decrease (){
count= count - 1
countEl.innerText=count;
if (count<0) {
    document.getElementById("count-el").style.color="red" 
} else{
document.getElementById("count-el").style.color = "green" 
}
}




let  saveEl = document.getElementById('save-el')
function save (){
let countStr = count + "-"
saveEl.textContent += countStr
countEl.textContent= 0
count=0

}






function sum() {
    let Answer = document.getElementById('result');
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;


    let num1Val = parseInt(num1);
    let num2Val = parseInt(num2);

    
    Answer = num1Val + num2Val;

    result.innerHTML = Answer;
}

function subtract (){
    let Answer = document.getElementById('result');
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;


    let num1Val = parseInt(num1);
    let num2Val = parseInt(num2);

    Answer =num1Val-num2Val
    result.innerHTML=Answer
}


function divide (){
    let Answer = document.getElementById('result');
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;


    //let num1Val = parseInt(num1);
    //let num2Val = parseInt(num2);
    Answer=num1/num2
    result.innerHTML=Answer
}

function multiply() {
    let Answer = document.getElementById('result');
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;


    let num1Val = parseInt(num1);
    let num2Val = parseInt(num2);
    Answer=num1Val*num2Val
    result.innerHTML=Answer

}


