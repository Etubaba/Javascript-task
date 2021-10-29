
// giving discount with if statement


/*let order = 457;

if  ( order > 500 || order > 400 ) {
    order  -= 50
}else if ( order >550) {
    order-=100
} else {
    console.log( "No discount")
}
console.log (order)*/

// converter
/*
function  kgToPounds ( pounds ){
    return 2.205*pounds
}

var b= kgToPounds(23)

console.log(b)*/

// function power ( base, expo) {
//     return base**expo
// }

//  console.log(power(2,4))



// universer converter


/*function  converter( multiplier) {
return function (input){
    return input*multiplier
}
}
let pow = converter (2.205)

console.log( pow(23))*/

// class Person { constructor {(Name,Age,id)
//     this.Name=Name
//     this.age=age
//     this.id=id}
//     details () {
//         return this.Name + " is" + this.age+ "with an id of"
//         + this.id}
//     }
// }
// let x = new person ( 'prosper',27, 23232)
// console.log(x.Name)



// class person{
//     constructor (name) {
//     this.name
//     }   
// };
// let f=  Person ('prosper');

// console.log(f.name)
/*
class Circle {
    constructor(radius) {
        this.radius = radius
      
    }  

get area  (){
        return (Math.PI*(this.radius**2))}
}

let circle = new Circle(8)
 console.log ( circle.area)

class semicircle extends Circle {
    constructor (radius) {
super(radius) 

    }

    get area() {
        return (Circle.area/2)
    }
}

const sc = new Circle(5)
console.log(sc.area)*/



//var com = [34, -40,31,-7,65,-21]

// var positive=[]; 
// var negative=[];
// for(let i=0;i<com.length,i++;){
//     if(Math.sign(com[i])===1 ){
// positive.unshift(com[i]);
//     } else{ negative.unshift(com[i])}
// }
//  console.log(negative)   

let i=0;
 while(i<20){
     if(i===9)continue
     console.log(i); i--}













