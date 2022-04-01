// alert("this is awesome")
console.log("como estas")

console.log(7+4)

const myVariable= "this is my first variable"

const myNumber= 1 

console.log("4" + " " + "3")

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

console.log(4+3)

let num1 = 30
let num2 = 50
num2 = 80 
const add= num1 + num2
console.log(add)




function myAddFunction(){

    4+3
}

function myMultiplyFunction(){

    4*3
}

console.log(myAddFunction)
console.log(myMultiplyFunction)

function toast(topping){

    console.log(topping + " is expensive")
}

toast("truffle")

function Dozon(){

    return "6"+"3"
}

console.log(mySecondFunction())

const myDog = {
    name: 'Bruno',
    color: 'dark',
    breed: 'golden retriver',
    weight: '130lb',
    hobby: "walk on the beach"
     }


let num = 5

if (num<10) {
    console.log("iam small")
}

else{
    console.log("im big")
}


const fruitCount = {
    apple: 28,
    orange: 17,
    pear: 54,
    pineapple: 10,
    banana: 2
    }
    const fruitKeys = Object.keys(fruitValue)
    console.log(fruitValue)


    const numberList = [2, ,456, 34, 100, 59, 75, 200, 970];
    
     for (let i = 0; i < numberList.length; i++) {
     // this variable get the value of each element of the array
     const num = numberList[i]
     if (num < 75) {
     console.log(num + ' is smaller than 75')
     }
     else{
     console.log(num + ' is bigger than 75')
     }
     }