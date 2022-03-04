// alert("this is awesome")
console.log("what is up")

console.log(7+4)

const myVariable= "this is my first variable"

const myNumber= 1 

console.log("4" + 3)

var thisVar= 8
var thisVar= 10

let otherVar= 4
otherVar= 6

// , saves you time to type multiple consts
const firstVar= 1,   
secondVar =2, 
thirdVar = 3 

const year = "2022"
console.log("this year is " + year)

function myFirstFunction( veggie, veggie2, veggie3 ){

    console.log("i am eating " + veggie +"," + veggie2 +"," + veggie3)
}

myFirstFunction("poooooo", "booooo", "lalalla")

function mySecondFunction(){

    return "something"
}

console.log(mySecondFunction())

const myThirdFunction = function() {
    console.log("function on a variable")
}

const myArrowFunction1 =() =>{
    console.log("this is an arrow function")
}


const myCar = {
    brand: "audi", 
    color: "blk",
    year: "2022"
}

const myCarColor = myCar.color
console.log(myCarColor)

// how to target things in html in js
const selectId= document.querySelector("#bestIceCream")
console.log(selectId)

const selectClass = document.querySelector(".plainIceCream")
console.log(selectClass)

// need to get firefox to show details of the log 

// query selector only target the first class comes into the order. need to use ".aClassName .aSubClassName"

const myArrayLong = [
    "item1",
    "item2",
    "item3",
    "item4"

]

const item2Po = myArrayLong.indexOf("item2")
console.log(item2Po)

myArrayLong.splice(2,0,"lalallala")
console.log(myArrayLong)

