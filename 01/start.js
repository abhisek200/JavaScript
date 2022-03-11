// alert("this is testing msg.")

// document.write(3+4)

// window.alert("how are you")

// ; is optional

// document.write(prompt("Enter name"))

// document.write("<br>") // <br> is break

// name = prompt("Enter age")
// document.write(name)

document.write(confirm("would you like to exit? Are you sure ?"))
document.write("<br>")

//variables

var a = 45
document.write(a)
var b=22
document.write("<br>")
document.write(a+b, "<br>")
document.write("a + b =", (a+b), "<br>")
document.write("a/b = ", a/b, "<br>")

document.write(typeof a)
document.write("<br>")

var name2= "your name here"
document.write(typeof name2, "<br>")

let abc = 212
//'let' is same as 'var'
document.write("abc/2 = ", abc/2, "<br>")

//keywords are words that are already know by the compiler or is pre-defined

//identifier: var a='aas', a is identifier ; defined by user ; 'aas' is literal

//DATA TYPES:

var n1=22.22
document.write(typeof(n1), '<br>')

var n2='yipiee kai YAY'
document.write(typeof(n2), '<br>')
document.write(n2.length, '<br>')
document.write(n2.toLocaleLowerCase(), '<br>')
document.write(n2.toUpperCase(), '<br>')
document.write(n2.substring(2,n2.length), '<br>')
document.write(n2.charAt(2), '<br>')
var ax = true
document.write(typeof(ax))

document.write("<h2> ------------------ </h2>")

//object
var ob = { 'name' : 'Abhisek' }
document.write(typeof ob, '<br>')
document.write(ob['name'],'<br>')

//arrays
var arr1=[22,223,211,321,211]
document.write(arr1.length, '<br>')
document.write(' 223 index is : ',arr1.indexOf(223), '<br>')
document.write(typeof(arr1),'<br>') //array is also object

var n = prompt("Enter a number bitch: ") //takes string input
var a3 = parseInt(n)  
// or a3=parseInt(prompt("enter a number"))  
if(a3 > 0){
    document.write(a3," is positve")
}
else if (a3 < 0){
    document.write("negative.")
}
else{
    document.write("pls die, its 0.")
}
document.write('<br>')

//LOOP
for(var i=1; i<10; i++){
    document.write("<h2>", "HELLO UNIVERSE ",i, "</h2","<br>") 
}
document.write('<br>')

function sayhello(){
    document.write("says hello fy.",'<br>')
}
function doSum(a,b){
    return a+b + " say you suck" + "<br>"
}

sayhello()

document.write(doSum(22,21))
