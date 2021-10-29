var display = document.getElementById("countdown").textContent;

var countdown = setInterval( function(){
    display--;
    document.getElementById("countdown").textContent = Math.abs(display)
    
    if( display <= -60) {
    display=60
//}, 1000);
       }
       else if( display < 60 && display > 10){
        document.getElementById("green").style.backgroundColor="green"
        document.getElementById("green").style.boxShadow="  0 0 20px 10px green"
        document.getElementById("countdown").style.color="green"

        document.getElementById("yellow").style.backgroundColor=""
        document.getElementById("yellow").style.boxShadow="";

        document.getElementById("red").style.backgroundColor="";
        document.getElementById("red").style.boxShadow="";


    } else if ( display<0 && display > -50){
        document.getElementById("yellow").style.backgroundColor=""
        document.getElementById("yellow").style.boxShadow="";

        document.getElementById("green").style.backgroundColor=""
        document.getElementById("green").style.boxShadow="";

        document.getElementById("countdown").style.color="red"

        document.getElementById("red").style.backgroundColor="red";
        document.getElementById("red").style.boxShadow="  0 0 20px 15px red";
    }else if (display < 10 && display > 0 || display < -50) {

        document.getElementById("green").style.backgroundColor=""
        document.getElementById("green").style.boxShadow="";
        
        document.getElementById("red").style.backgroundColor="";
        document.getElementById("red").style.boxShadow="";

        document.getElementById("countdown").style.color="yellow"

        document.getElementById("yellow").style.backgroundColor="yellow";
        document.getElementById("yellow").style.boxShadow="  0 0 20px 15px yellow";
    }
    
    
}, 500);

/*
const circles = document.querySelectorAll('.display')
let activeLight=0;
setInterval(changelight, 30000);
function changelight(){
    circles[activeLight].className="display";
    activeLight++;

    if (activeLight>2){
        activeLight=0
    }

    const currentlight =circles[activeLight];

currentlight.classList.add(currentlight.getAttribute('color'))

}

*/





