// javascript css style
//  ------------------DOCUMENT OBJECT MODEL (DOM)
// we can get any uniqe element by write that element directly
// after document method

/* 
when we write css code style using js style
we Have Specifc standerd We Simply replace - with writing the 
next Charactar Capital ..

for example on css file we have:
background-image
on style js we have:
backgroundImage

on css:
border-bottom-color
on js style:
borderBottomColor
..
*/

let body = document.body;
body.style.backgroundImage = "linear-gradient(to left, #fb9c1b, #ff5722)";
// let's center the img using js style
// let logo = document.getElementById("logo");

// logo.style.width = "400px";
// logo.style.position = "absolute";
// logo.style.top = "50%";
// logo.style.left = "50%";
// logo.style.transform = "translate(-50%, -50%)"


// select elements by using querySelector  querySelectorall

// if we want select one element we can use 
// querySelector we can write the element name
// on that case this will give us the first element
// also we can selected by id or class name

// var header = document.querySelector("header");
// var header = document.querySelector("#header");
var header = document.querySelector(".headerX");
// . means class name
// normally it means id

header.innerHTML = "<h2>New Header data</h2>"

// we can select all element with specific name
// or class or id using querySelectorall

// querySelector selects all the possible combinations
var data = document.querySelectorAll("p") // using el name
console.log(data)
data[1].style.color = "white"

// var data = document.querySelectorAll(".pa") // using class name
var data = document.querySelectorAll("p, header") // multiple elements by el name
// this will but our p element into array
console.log("data", data)

data[2].style.color = "navy"
data[4].style.color = "navy"
for (let i = 0; i < data.length - 2; i++) {
    data[i].innerHTML += "<i> Up </i>"
    if (i == 2 || i == data.length - 1) {
        continue
    }
    data[i].style.color = "white"
}





// HTML DOM getElementsByTagName() Method
// HTML DOM getElementsByClassName() Method

var tagXname = document.getElementsByTagName("h3")[1]; // select h3 tag on index 1
console.log(tagXname)
tagXname.innerHTML += " new value here"

var El_ByClassName = document.getElementsByClassName("HP")[2] // this will give us first p tag
console.log(El_ByClassName)
El_ByClassName.style.color = "green"


// we can get all by class name or tag name then loop it
var AllByTagName = document.getElementsByTagName("h3");
console.log(AllByTagName)
for (let i = 0; i < AllByTagName.length; i++) {
    AllByTagName[i].innerHTML += "UPDATED";
    AllByTagName[i].style.border = "3px solid violet"
}
console.log(AllByTagName)

var AllByClassName = document.getElementsByClassName("HP");
for (let i = 0; i < AllByClassName.length; i++) {
    AllByClassName[i].innerHTML += " : UNDO BITCH";
    AllByClassName[i].style.color = "DimGray"
}





// input  |  select option |  textarea

function getValue() {
    let show = document.getElementById("show")
    let input = document.getElementById("input").value
    let textarea = document.getElementById("textarea").value
    let option = document.getElementById("option").value
    show.innerHTML += `${input} is: <br> ${textarea} is: <br> ${option} is: <br>`
}



//onLoad onClick
// alert("hi")

//arrow function
// onload = ()=>{   
//         alert("load page");
// };

//you can also name your function
// onload = function(){
//     alert("load page");
// }

// onload = function run_codes(){
//     alert("load page"); 
// }

var button1 = document.getElementById("button1");
button1.onclick = () => {
    alert("haha clicked bitch 696969");
}

// ------------
// class App{
//     constructor(){
//         document.getElementById("text").onclick = ()=>{
//          this.run_codes();   
//         };
//     }

//     run_codes(){
//         alert("motherfucka");
//     }
// }

// onload = new App(); 








// addEventListener 
// -------------------------------------------------------------------------
let textt = document.getElementById("text")

document.getElementById("text").addEventListener("click", () => {
    alert("works fuckas");
}) 

let input = document.getElementById("check")
input.addEventListener('change', function(){
    console.log(input.checked)
    if(input.checked){
        textt.innerHTML = "CHECK BABES"
    }
    else{
        textt.innerHTML = "NOT CHECK BABS"
    }
})
// document.getElementById("text").addEventListener("click" , function(){
//     alert("click on element done");
//     });


// AUDIO VIDEO
// var media = document.getElementById("mus");
var media = document.getElementById('vid')

function getDuratin(){
   let int = setInterval(() => {
        let time = media.currentTime;
        let duration = media.duration;
        let percent = Math.floor(time/duration * 100)
    document.getElementById('duration').style.width = `${percent}%`;
        if(media.ended){
            clearInterval(int)
        }
   }, 1000);   
}


function play(){
    media.play();
    getDuratin()
}
// function play(){
//     alert(media.currentTime)
//     media.play();
// }

function pause(){
    media.pause();
}
function load(){
    media.load();
}

function stopVolume(){
    media.volume = 0;
}
function playVolume(){
    media.volume = 1;
}

function speedUp(){
    media.playbackRate +=0.10;
}
function slowDown(){
    media.playbackRate -=0.10;
}
if(media.ended == false){

}

// muted duration currentTime 
// playbackRate  ended









// ------------------------------------------------ -----------------------------
// MATH FUNCTIONS:
// Math.round(x) returns the value of x rounded to its nearest integer:
// Math.pow(x, y) returns the value of x to the power of y:
// Math.sqrt(x) Returns the square root of x:
// Math.ceil(x) returns the value of x rounded to the nearest integer by incrementing:
// Math.floor(x) returns the value of x rounded to the nearest integer by decrementing:
// Math.random(); Returns a random number between 0 (inclusive) and 1 (exclusive):
// Math.min(x, y, z, ..., n) to get the smallest number from a set of numbers
// Math.max(x, y, z, ..., n) Returns the largest number from a set of numbers
// ------------------------------------------------ -----------------------------

 
// CONVERT
// string to Number 
// Number to string
// parseFloat() string to float num
// parseInt() string to init num
// toString() is used to convert data of a number type to data of type text
// toFixed()  is used to round a number to the decimal number you want

// var number1 = 10;
// var number2 = "70.12";

// number1+= parseFloat(number2);

// console.log(number1);
// let number = 200.65;
// alert(number + 10);
// alert(number.toFixed(0));


// ------------------------------------------------ -----------------------
// navigator.onLine is used to check if a user is online or not
// ------------------------------------------------ -----------------------
// Returns true or false, if a user is online, it will return true
// true/false
// ------------------------------------------------ -----------------------
// to execute commands when a user becomes online
// window.addEventListener('online',  );
// ------------------------------------------------ -----------------------
// to execute commands when a user is offline
// window.addEventListener('offline', );

let isOnline = navigator.onLine
console.log("ARE YOU ONLINE? =",isOnline)

// window.onoffline = ()=>{
//     alert("you are offline NoW!")
// }

// // window.addEventListener('offline',()=>{
// //     alert("you are offline NoW!")
// // } );

// window.addEventListener('online',()=>{
//     alert("You Are Online")
// } );





