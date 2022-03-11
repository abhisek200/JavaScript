// alert("This is an alert message!")
// This is to comment
/* This is also for comment */
// console/console.log("Jerk!");

//VARIABLES
// var | let | const

var text = 'mock js'

var text = 'mock learner' //not ideal but no error
console.log(text)
document.write(text)
console.log("KEEP UP")
console.log(document.getElementById('id101'))
console.log(typeof (document.getElementById('id101')))

var href = location.href
console.log(href)

var html = '<p> MOCK PARAGRAPH </p>'
document.write(html)
var html = '<p id=\'test\'> MOCK PARAGRAPH 2</p>'
document.write(html)
var html2 = '<p id="test"> MOCK PARAGRAPH 3</p>'
document.write(html2)

var Name = "ABHISEK panda"
var new_2 = Name + "<p> OKAYYYY</p>"
document.write(new_2)

var htmlx = `
${Name}
<h1 style="color:red">Welcome to:</h1>
${2+2}
<p> Javascript </p>
`
document.write(htmlx) // `` within backquotes to mix variables with strings


//OPERATORS
/*---------------
+ - * % / 
++/-- = increment and decrement
** =  exponential

= ,+= ,-= ,*= ,/= ,%= ,**=
------------------
*/
console.log(2 ** 6)

/*
The outerHTML property sets or returns the HTML element
and all its content, including the start tag, its attributes, and the end tag
The outerText property sets or returns the text content of the specified node. 
similar to innerText property.
*/
// var header = document.getElementById('headx')
// header.outerHTML = `<p> youre blind with hate </p>` // old header tag is replaced
// document.write(header)

/*innerHTML property */
var header = document.getElementById('headx')
// alert(header.innerHTML)
header.innerHTML = `<h1> new data  is ready to f'ed</h1>` //replaced the h1 tag in header file
// `` makes the chars bold
// header.innerText = '<h1> this can also replace the data </h1>'



//JS CONSOLE METHODS
// javascript console methods //
// log Outputs a message to the console
//  assert()	Writes an error message to the console 
//              if the assertion is false
// error()	Outputs an error message to the console
// info()	Outputs an informational message to the console
// warn()	Outputs a warning message to the console
// clear()	Clears the console
// count()	Logs the number of times 
//          that this particular call to count() has been called
// ---------
// groupCollapsed()	Creates a new inline group in the console.
//                  However, the new group is created collapsed. 
//                  The user will need to use the disclosure 
//                  button to expand it
// groupEnd()	Exits the current inline group in the console
// ---------
// group()	Creates a new inline group in the console. 
// This indents following console messages by an additional level,
// until console.groupEnd() is called
// ------
// time()	Starts a timer (can track how long an operation takes)
// timeEnd()	Stops a timer that was previously started by console.time()
// ------
console.assert('js with mockkk')
console.info("information only")
console.warn('server warning')
console.clear()
console.log('pass any message ')
console.count("Mock")
console.count("Mock")
console.count("Mock")
console.count("JS")
console.count("JS")
console.count("JS")
console.groupCollapsed("GroupName here ")
console.log('Message via .log')
console.error('Error message here')
console.groupEnd()

console.group("server via group()")
console.warn('Server Running')
console.groupEnd()

console.time()
var ex = `<h2> Failure exists? </h2>`
document.write(ex)
console.timeEnd()

//STRING AND SIMILAR RELATED
// The toUpperCase() method converts a string to uppercase letters.
// The toLowerCase() method converts a string to lowercase letters.
// The concat() method joins two or more strings.
// we can also do it by this way
// let Name = firstName + lastName
// The trim() method removes whitespace from both sides of a string.
// The charAt() method returns the character at a specified index (position) in a string.
// The length property returns the length of a string.
// The length property of an empty string is 0
// The indexOf() method returns the position of the first occurrence 
// of a specified value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.
// The lastIndexOf() method returns the index (position) of the 
// last occurrence of a specified value in a string.
// The lastIndexOf() method searches the string from the end 
// to the beginning.
// The lastIndexOf() method returns the index from 
// the beginning (position 0).
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() method is case sensitive.
// The search() method searches a string for a value.
// The search() method returns the index (position) of a match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive.
// The startsWith() method returns true if a string starts 
// with a specified string.
// Otherwise it returns false.
// The startsWith() method is case sensitive.
// The endsWith() method returns true if a string ends 
//  with a specified string.
//  Otherwise it returns false.
// The endsWith() method is case sensitive.
// -----------------------------------------------------------------|~
// The replace() method searches a string 
// for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string

// text = text.replace(/\$/g,"  ");
// text = text.replace(/Love/g , "Any")
// text = text.replace(/love/ , "Any")
// text = text.replace(/love/i , "Any")
// text = text.replace(/love/gi , "Any")

// The substring() method extracts characters, 
// between to indices (positions), from a string, 
// and returns the substring.
// The substring() method extracts 
// characters from start to end (excusive).
// The substring() method does not change the original string.



let text2 = 'what is your point yet point?'
let len = text2.length
document.getElementById('headx').innerHTML = len
document.getElementById('headx').innerHTML = text2.search('point') //13
document.getElementById('headx').innerHTML = text2.lastIndexOf('point') //23
document.getElementById('headx').innerHTML = len //29
document.getElementById('headx').innerHTML = text2.endsWith('nt?')
document.getElementById('headx').innerHTML = text2.startsWith('what')

let text3 = 'I$am$Puzzled. I want WANT'
document.getElementById('headx2').innerHTML = text3.replace('$', ' ') //replaces only 1st g
document.getElementById('headx2').innerHTML = text3.replace(/\$/g, ' ') //replaces all g, '\' because of special characters
document.getElementById('headx2').innerHTML = text3.replace(/WANT/g, "ELIXER")

//Arrays-------------------------------------------------
// // An array is a special variable, which can hold more than one value:
// // [] brackets, square bracket
// // define array
// add values to the array and put it on a varaible
var arr = ["Hay Js", 10, false, ["js", "html"]]

console.log(arr)
// get sepcific index 
console.log(arr[0]) // we start count from 0
console.log(arr[1])
console.log(arr.length)
console.log(arr.length - 1) // get the last element index num
console.log(arr[arr.length - 1]) // get the last element
console.log(arr[3][0]) // get data from array with in array
console.log(arr[20]) // undefined

// // --- update array
var data = ["hay", true, 10, false, ["php", "MySql", false]];

data[0] = 100;
data[1] = "Mock Academy";
data[4][2] = "CSS";

console.log(data)

// -- delete 
delete data[0]
console.log(data)
// -- delete using splice
data.splice(3, 4) // start index to end index
console.log(data)

let games = ["R6 Siege", "Valorant", "GTA", "Forza"]

//  push() method adds a new element to an array (at the end):
games.push("Tarzan")
console.log(games)
//  shift() method returns Removes the FIRST element from an array and returns it.
//  If the array is empty,
//  undefined is returned and the array is not modified.
console.log(games.shift())
console.log(games)
//  unshift() method adds a new element to an array (at the beginning)
//  and "unshifts" older elements:

// check if is Array
console.log(Array.isArray(games))
console.log(Array.toString(games))

//use forEach to Loop the data with in array
var companies = ["Walmart", "Lenskart", "boAt", "Apple", "Pixel"]
var count = 0;
console.log(typeof (companies))
companies.forEach(comp => {
    count++
    console.log("indexs", count, ":", comp)
})

companies.forEach(comp2 => {
    document.getElementById("list121").innerHTML += `
    <li>${comp2}</li>
    `
})


//----------------------------------OBJECT:

//create ; similar to key value pair
var obj = {
    Name: "Abhisek Panda",
    lang: ["Java", "Html", "Python"],
    student: true,
    Age: "24",
    Mockfunc: function () {
        return "data" + this.student
    }
}

console.log(obj)
console.log(obj.Name)
console.log(obj.lang[1])
console.log(obj.Mockfunc())

//OBJECT: change, delete, add new

obj["student"] = false
obj.student = false //two to ways to change.
console.log(obj)

delete obj.Age
console.log(obj)

obj.NewKeyName = "New values insert here"
obj["AgeShit"] = 69
console.log(obj)

delete obj["NewKeyName"]
// or delete obj.NewKeyName
console.log(obj)

//create obj INSIDE obj

var users = {
    user1: {
        Name: "Akbar",
        email: "akbar@gmail.com"
    },
    user2: {
        Name: "Jumanji",
        email: "therock@gmail.com"
    },
    user3: {
        Name: "Penguin",
        email: "theweiner@gmail.com"
    },
}
console.log(users)
console.log(users["user1"])
console.log(users["user2"]["email"])
console.log(users.user1.Name)


//CONDITIONAL STATEMENTS-----------------------------------------
// conditional sentences
// conditional Logic
console.log(1 == 1) // == mean is Equel
console.log(1 > 2) // false
console.log(2 > 1) // true
console.log(4 < 4) // false

console.log(3 >= 3) // true
console.log(3 <= 3) // true

console.log("3" === "3") // true 
console.log(3 === "3") // false .. === we check the data type to
// Logical Operators

// || OR
console.log(2 > 2 || 2 >= 2) // true
console.log(3 <= 3 || 1 <= 3 || 5 <= 3) // true
console.log(4 < 3 || 4 >= 5) // false 
// if any conditaon equel true mean that the final result will be 
// true . if not we will have false as a final result

// && And
console.log(2 <= 3 && 2 > 1 && 1 >= 0) // true
console.log(3 < 2 && 4 < 6 && 6 <= 7) // false
// if any conditaon equel false mean that the final result will be 
// false . if not we will have true As a final result


// != Not Equel
console.log(2 != 1) // true
console.log(3 != 3) // false
console.log(4 != "4") // false 

// !== Not Equal And Not Have The Same Data Types
console.log(2 !== "2") // true // does not hava the same data types
console.log(2 !== 3) // true
console.log(5 !== 5) // false


// if --
if (true) {
    // alert("Yes")
}

if (false) {
    console.log("No")
}

// 


var Name = "Mock";
var Score = 5;

if (Name == "Mock") {
    console.log("Name is", Name)
}

if (Name == "Mock" && Score > 6) {
    console.log(Name, "Win")
}
// note that javascript condition logic is case sensitive 
if (Name != "mock") {
    console.log("New Msg")
}

// --




// else
if (false) {
    console.log("Data")
} else {
    console.log("other data")
}

if (true) {
    console.log(200)
} else {
    console.log(500)
}


// 

var NewName = "New";
var NewScore = 2;

if (NewName !== "New" && NewScore > 5) { // false
    console.log("New Name Lose")
} else {
    console.log("Winner Name", NewName, "+Score :", NewScore)
}

// .. we can write more than one conditin by using
//  else if

// --
if (NewName == "New" && NewScore > 4) {
    console.log("Winner", NewName)
} else if (NewName == "New" || NewScore > 4) {
    console.log("Player", NewName)
} else if (NewName == "New") { // will not work even if is true
    console.log("Check..")
} else {
    console.log("who are you")
}


//SWITCH---------
// switch
var x = 5;
switch (x) {
    case 1:
        console.log("case 1 x=", x)
    case 3:
        console.log("case 3 x=", x)
    case "5":
        console.log("case 5 string x=", x)
    case 5:
        console.log("case 5 int x=", x)
    case 6:
        console.log("case 3 x=", x)

}
//if we have correct case multiple times will excute in both cases
switch (x) {
    case 5:
        console.log("case F701 x=", x)
    case 5:
        console.log("case F69 x=", x)
    case 6:
        console.log("case F2 x=", x)
    default:
        console.log("default is executed always fucker")
}

// Use Break
switch (x) {
    case 5:
        console.log("case 1 x=", x)
        break;
    case 5:
        console.log("case 2 x=", x)
}
// Default
switch (x) {
    case 3:
        console.log("5 case 1 x=", x)
        break;
    case 5:
        console.log("55 case 2 x=", x)
        break;
    case 4:
        console.log("case 3 x=", x)
        break;
    default:
        // if we did't add break default will always excute 
        console.log("Default", x)
        break;
}



//LOOPS --------------------------------------------------------

// while loop
// The while loop loops through a block of code as
// long as a specified condition is true.
// if we want to do something repeatedly we can use it

// infinite while loop
// while(true){
//  console.log(1)
// }

// Blocked while loop
// while(false){
//     console.log(2)
// }

// real example
var count = 0;
while (count < 5) { // the condition
    // to break the loop we need to do some thing
    count++;
    console.log("count", count);

    // use it on real word example
    document.getElementById("while").innerHTML += `Student : ${count} <br>`;
}


// use continue key word to skip specific round
var count = 0;
while (count < 5) {
    count++;
    if (count == 3) {
        continue
    } // next code after continue will not excute
    console.log("sext", count)
}


// break the loop
// use condetion

var count = 0;
while (count < 5) {

    var el = document.getElementById("while");
    if (count == 3) {
        break
    } else {
        el.innerHTML += `fcount : ${count} <br>`
    }
    count++;

}


// do while

var i = 0
var ni = "A variable here"
do {
    i++;
    document.getElementById("while").innerHTML += `i value is about to be ${ni+" "+i} <br>`;
} while (false)
// if while condition not true will excute the conde first
// then will block

var n = 0
do {
    n++;
    document.getElementById("while").innerHTML += `n value ${n} <br>`;
} while (n < 5)



// For Loop

// The for loop has the following syntax:
// for (statement 1; statement 2; statement 3) {
//   // code block to be executed
// }
// Statement 1 is executed (one time) 
// before the execution of the code block.

// Statement 2 defines the condition 
// for executing the code block.

// Statement 3 is executed (every time) 
// after the code block has been executed.

for (let count = 0; count <= 5; count++) {
    console.log("Number", count)
}

// real world example
let array = ["JavaScript", "HTML", "Java", "C++", "C#", "Golang", "PHP"]

for (let index = 0; index < array.length; index++) {
    let langNames = array[index];
    // use if else & else if statemnents
    if (langNames == "JavaScript") {
        document.getElementById("for").innerHTML += `First Lang :
         ${langNames} <br>`
    } else if (langNames == "HTML") { //use continue 
        continue
    } else if (langNames == "Golang") {
        document.getElementById("for").innerHTML += `Last Lang and then break :
        ${langNames} <br>`
        break
    } else {
        document.getElementById("for").innerHTML += `Else dick Lang : ${langNames} <br>`
    }
}



//FOREACH /w Array-------------------------------------
// // forEach loop With array

let MyHobbies = ["Football", "Paint", "drive", "Coding"]
// first Way  using in key word 
for (var index in MyHobbies) {
    //  alert("round : "+index)
    console.log("index is", index, "i.e.", MyHobbies[index]);
    // by using in key work for will retrun to us the list 
    // of our indexes number one by one we can use it to get 
    // the array elements dynamiclly

    //  console.log(MyHobbies[index])
}

// Second Way using forEach() Method
// The forEach() method calls a function for each element in an array.
MyHobbies.forEach(x => {
    console.log(x);
    // using this way we can directlly get the array element
    document.getElementById("ForEach Loop").innerHTML += `
     <li>${x}</li>
    `
})




//FOREACH /w Objects---------------------
// for each with objects
let list = {
    name: 'mock',
    age: '29',
    faild: 'teaching center'
};

// first way using in
// for(var item in list){
//     // by this way for will but each kay of are object inside
//     // our item varable we can use it to get the value
//     console.log("key: ", item , "value: ", list[item])   
// }

// second way useing ForEach method 
// first we need to convert the object to array


// var keys = Object.keys(list)
// console.log(keys)
// // now we have new array insde variable keys
// keys.forEach(el =>{
//     console.log("value ", el)
// })

// better to use ForEach method if we have Objects with in object
let Users = {
    user169: {
        Name: "Ahemd",
        Role: "Admin",
        Status: "Active"
    },
    user269: {
        Name: "Hoda",
        Role: "User",
        Status: "DeActive"
    },
    user369: {
        Name: "Jack",
        Role: "Admin",
        Status: "Active"
    },
}

Object.keys(Users).forEach(items => {
    // this will but the keys inside this items var
    console.log(items) //prints each item i.e. user169 then user269 and then user 369
    console.log(Users[items])
    //    console.log("name :", Users[items].Name)
    //    console.log("role :", Users[items].Role)
    //    console.log("Status :", Users[items].Status)

})

Object.keys(Users).forEach(xesy => {
    console.log("Name:", Users[xesy].Name)
    console.log("Paa-Role:", Users[xesy].Role)
    console.log("Stud-tuts:", Users[xesy].Status)
    console.log("\n")
})




//-----------------OOP----------------------------------OOP----------------------------------------OOP-----------------//

// var
//  opening and closing braces is the SCOPE of the var '{}'
{
    var Name = "Mock"

    Name = "NewMock"
    console.log("Name In scope:", Name)

}
// var CAN be used outside the scope
console.log("Name Outside of Scope:", Name)


// let
{
    let Email = "Mock@email"

    Email = "newMock@gmail.com"
    console.log("Email In scope:", Email)

}
// console.log("Email Out Scope", Email) //error
// let CANNOT be used outside the scope


// const

{
    const PassWord = "123";
    console.log("PassWord In scope: ", PassWord)
    // PassWord = "New555"; //you cannot re-assign with const
    // console.log("PassWord In scope", PassWord) //error

}
// const CANNOT be used outside the scope
// NOR const can be changed inside the scope i.e. cannot be reassigned

// console.log("PassWord Out Scope", PassWord) //error




//--FUNCTIONS---------

function Test1() {
    document.getElementById("sext2").innerHTML = "NOW WHO's MOCKINH >? HUH."
}

Test1() //can be called here
// can also be called from html file using onclick

function Test2() {
    return "MIRZAPUR LIFE STARTS!! test2"
}

var test2Value = Test2()
console.log(test2Value)
document.getElementById("sext1").innerHTML = test2Value


//Function parameters
function para1(a, b) {
    console.log("Sum: ", a + b)
}
para1(6, 9)

//without parameters take arguments
function para2(a, b) {
    console.log("args: ", arguments)
    console.log("args: ", arguments[2])
    console.log("args: ", arguments[4][2])
}
para2(6, 9, "Jerk", "LinkedList", [2, 5, 69, 96])
//you can parse in HTML in the similar method above




//CLASS CONSTRUCTOR-------------------------------------
class joi {
    constructor() {
        console.log("constructor called, bitch!")
    }
}
var obj1 = new joi()
var obj2 = new joi()

//Parameterised Constructor
// 'this' keyword usage

class fap {
    constructor(name, age) {
        this.name = name + " This is used."
        this.age = age + age / 10 + " this used bitch."
    }
}

var p1 = new fap("Abhisek", 22)
console.log(p1, p1.name)
document.body.innerHTML = `<p>NameX: ${p1.name} , AgeX: ${p1.age}</p>`

var p2 = new fap("Sins", 69)
document.body.innerHTML += `<p>NameX: ${p2.name} , AgeX: ${p2.age}</p>`


//METHODS in Class ----------------------------------------

// add/use Method in the class 
class App {
    constructor() {
        // this.change_background() //this keyword calls the change..() function
        // this.newText(text)
        let msg = this.getMessage("JavaScript")
        document.body.innerHTML += msg
    }
    change_background() {
        document.body.style.background = "pink"
    }

    newText(text) {
        document.body.innerHTML = text
    }

    getMessage(data) { // method return with params | use if
        if (data == "JavaScript") {
            return data + " Done!"
        } else {
            return data + " Not Yet !"
        }
    }
}

// onload = new App()
let objx = new App();
objx.change_background() //calling the change bg method
objx.newText("DATAA here !  ")
objx = new App()
let varx = objx.getMessage("Python")
document.body.innerHTML += " xyz  "+ varx 
console.log(varx)



//-----------------------------------------------------X-----------------------------------------------------
//----------------------------------------------------------------------------------------index2.0 Continued: