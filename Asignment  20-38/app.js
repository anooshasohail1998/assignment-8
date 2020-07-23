//======================CHAPTERS:21-25=======================================
//STRING METHODS:
//TASK1:-----
/*var firstName = prompt("Enter your First Name")
var lastName = prompt("Enter your Last Name")
var fullName = firstName + lastName
document.write(fullName)*/


//TASK:2-------
/*var user = prompt("Enter Your Favourite Mobile Phone Model")
var length = prompt("Enter length model")
document.write("My favourite Phone is  " + user + "<br>Length of String:" + length)*/

//TASK:3-----------
/*var nationality = "Pakistani"
document.write("String: " + nationality)
document.write("<br>Index of 'n' :" + nationality.indexOf("n"))*/

//TASSK:4------------
/*var print = "Hello World"
document.write("String: " + print)
document.write("<br>Index of last 'l' :" + print.lastIndexOf("l"))*/

//TASK:5------------because 0 start index number
/*var word = "Pakistani"
document.write("String: " + word)
document.write("<br>Character at index 3 : " + word.charAt(3))*/

//TASK:6-------------
/*var firstName = prompt("Enter your First Name")
var lastName = prompt("Enter your Last Name")
document.write(firstName + lastName)*/

//TASK:7-------------Replace
/*var city = "Hyderabad"
document.write("City:" + city)
document.write("<br> After Replacement:")
document.write(city.replace("Hyder", "Islam"))*/

//TASK:8---------globalchanging replace
/*var message = "Ali and Sami are best friends.They play cricket and football together"
var messageChange = message.replace(/and/g, "&")
document.write("Global Changing<br>" + message)
document.write("<br>" + messageChange)*/

//Task:9--------
/*var value = "472"
document.write("Value:" + Number(value))
document.write("<br>Type:" + typeof(value))
var val = 472
document.write("<br>Value:" + parseInt(val))
document.write("<br>Type:" + typeof(val))*/

//TASK:10-------UPPERCASE
/*var convert = prompt("Enter! lowercase word")
document.write("User input: " + convert)
document.write("<br> Upper case: " + convert.toUpperCase())*/


//Task:11-------
/*var lang = prompt("Enter High Level language")
var copyLetter = lang.slice(0, 1) //First letter 0index sai copy kero 1 tek
copyLetter = copyLetter.toUpperCase() //usko convert kero uppercase mai
var otherLetter = lang.slice(1) //baqi character1 sai agai sarai copy kero
otherLetter = otherLetter.toLowerCase() //usko loercase mai convert
var fullLetter = copyLetter + otherLetter //aik varaibale mai dono ko rekhdoo
document.write("User input: " + lang)
document.write("<br>Title case:  " + fullLetter)*/

//TASK:12---------
/*var num = 35.36
var n = num + ''
n = n.replace('.', '')
n = parseInt(n)
document.write("Number:  " + num)
document.write("<br>Result:  " + n)*/

//TASK:13--------------------------------------
/*var userName = prompt("Enter username")
if (userName == "!@,.") {
    alert
        ("Please enter a valid username")
} else {
    alert("okok")
}*/
// var user = prompt("Enter username")
// var str = 'user'
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "@!.,") {
//         alert("Please enter a valid username!");
//         break;
//     }
// }

//TASK:14----Array
/*var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("Welcome to ABC Bakery.What do you want to order Sir/Mam?")
search = search.toLowerCase()
var firstChar = search.slice(0, 1) //copy charcter 0 sai 1  ---    slice(0,1) 0 sai start kitnai copy?1 tek
firstChar = firstChar.toUpperCase() //first letter  convert upperrcase
var otherChar = search.slice(1) ///1 character sai agi sub copy
otherChar = otherChar.toLowerCase() //all letters convert lowercase
if (items.indexOf(search) !== -1) {
    alert(search + " is available at index:" + items.indexOf(search) + " in our bakery")
} else {
    alert("We are Sorry ." + search + " is not availabe in  our bakery")
}*/


//TASK:15----
/*var password = prompt("Enter user Password!")
if (password.length > 6) {
    alert(password)
} else if (password == [0 - 9]) {
    alert(password)
} else if (password == [A - Za - z]) {
    alert(password)
} else {
    alert("Invalid Password")
}*/






//TASK:16------
/*var uni = "University of Karachi"
var split = uni.split("")
document.write(split)
document.write("<br>" + split[0])
document.write("<br>" + split[1])
document.write("<br>" + split[2])
document.write("<br>" + split[3])
document.write("<br>" + split[4])
document.write("<br>" + split[5])
document.write("<br>" + split[6])
document.write("<br>" + split[7])
document.write("<br>" + split[8])
document.write("<br>" + split[9])
document.write("<br>" + split[10])
document.write("<br>" + split[11])
document.write("<br>" + split[12])
vdocument.write("<br>" + split[13])
document.write("<br>" + split[14])
document.write("<br>" + split[15])
document.write("<br>" + split[16])
document.write("<br>" + split[17])
document.write("<br>" + split[18])
document.write("<br>" + split[19])
document.write("<br>" + split[20])
document.write("<br>" + split[21])
document.write("<br>" + split[22])*/

//TASK:17-----Last Character of UserInput
/*var name = prompt("Enter name")
var lastChar = name.charAt(name.length - 1)
document.write("User Input :" + name)
document.write("<br>Last Character of Input :" + lastChar)*/

//TASK:18--------
//svar string = "The quick brown fox jumps over the lazy dog"


//=======================CHAPTER:26-30==========================================
//MATH METHODS:


//TASK1:----Positive Integer
/*var integer = prompt("Enter any + integer")
document.write("number: " + integer)
document.write("<br>round off value: " + Math.round(integer))
document.write("<br>floor value: " + Math.floor(integer))
document.write("<br>ceil  value: " + Math.ceil(integer))*/


//TASK:2--------
/*var integer = prompt("Enter any - integer")
document.write("number: " + integer)
document.write("<br>round off value: " + Math.round(integer))
document.write("<br>floor value: " + Math.floor(integer))
document.write("<br>ceil  value: " + Math.ceil(integer)) */


//TASK:3---------

/*document.write("<br>The absolute value of 5 is " + Math.abs(5))
document.write("<br>The absolute value of -4 is " + Math.abs(-4))*/


//TASK:4-------
/*var dice = Math.random() * 5
var diceno = Math.floor(dice)
document.write("random dice value : " + diceno)
var dice = Math.random() * 7
var dicenum = Math.floor(dice)
document.write("<br>random dice value : " + dicenum)*/



//TASK:5--------
// var headuser = prompt("Enter Head User")
// var tailuser = prompt("Enter Tail User")
// var toss = Math.random() * 3 //0saib1 ki range mai random number generate
// var floor = Math.floor(toss) //lower value
//     //console.log(floor)

// if (floor === 0) ///yaa tou zero ayaigaa yaa one ayegaa
// {
//     document.write(floor)
//     document.write("<br>random coin value " + tailuser)
// } else {
//     alert("random coin value " + headuser)
// }

//TASK:6--------
// var random = Math.random()
// var rand = Math.round(random)
// document.write(rand * 100)


//TASK:7---------
// var user = prompt("Enter a weight in kgs ")
// if (user == "50kg" && user == "50kg") {
//     document.write(user)
// }


//TASK:8-----
// var user = prompt("ENTER A NUMBER  1-10")
// var rand = Math.random(user) * 11
// var random = Math.floor(rand)
// if (user == !random) {
//     alert(random)
// } else {
//     alert("Try again!")
// }


//================CHAPTERS:31-36===============================================
//DATE METHODS:
//TASK1:------
//var a = new Date()
//document.write(a)

//TASK2:---------
// var d = new Date()
// var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// document.write("Current Month: " +months[d.getMonth()])

//TASK:3------
// var d = new Date()
// var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
// document.write("Today is  " + days[d.getDay()])


//TASK:4--------
/*var days = prompt("Enter a days just in lowercase")
switch (days) {
    case "saturday":
        document.write("Its Fun Day")
        break;
    case "sunday":
        document.write("Its Fun Day")
        break;
    case "monday":
        document.write("Its Working Day")
        break;
    case "tuesday":
        document.write("Its Working Day")
        break;
    case "wednesday":
        document.write("Its Working Day")
        break;
    case "thursday":
        document.write("Its Great Day")
        break;
    case "friday":
        document.write("Eid Day Good  & Happy! Day")
        break;
    default:
        document.write(" A Day")0
        break;
}*/

//TASK:5-------
/*var today, someday, text;
today = new Date();
someday = new Date();
someday.setDate(15)
if (someday < today) {
    document.write(text = "last days of month.")
} else {
    document.write(text = "First fifteen  days of month.")
}*/

//TASK:6---------
// var d = new Date()
// document.write("Current Date: " + d)
// var date = new Date("Jan 1 1970")
// var datemilli = date.getMilliseconds()
// var today = new Date()
// var todaymilli = today.getMinutes()
// document.write("<br>Elapsed milliseconds since january 1,1970   " + datemilli)
// document.write("<br>Elapsed minutes since january 1,1970   " + todaymilli)


//TASK:7---------



//TASK:8----------



//TASK:14-------------

/*var customerName = prompt("Enter your Customer Name")
var month = prompt("Enter your month")
var numberOfUnits = prompt("Enter Number Of Units")
var chargerPerUnits = prompt("Enter charges per units")
var netAmountPayable = numberOfUnits * chargerPerUnits
var latePaymentSurchage = 350
var grossAAmountPayable = netAmountPayable + latePaymentSurchage
document.write("<h1>K-Electric Bill</h1>")
document.write("<br>Customer Name: " + customerName)
document.write("<br>Month: " + month)
document.write("<br>Number Of Units: " + numberOfUnits)
document.write("<br>Charges per Unit: " + chargerPerUnits)
document.write("<br>Net Amount Payable(Within Due Date): " + netAmountPayable)
document.write("<br>Late Payment Surchage: " + latePaymentSurchage)
document.write("<br>Gross Amount  Payable(after Due Date): " + grossAAmountPayable)*/


//================ CHAPTER:35-38================================================
//FUNCTION:-----


//TASK:1--------
/*function date() {
    var d = new Date()
    document.write(d)
}
date()*/


//TASK:2--------
/*function greet() {
    var firstName = prompt("Enter First Name")
    var lastName = prompt("Enter Last Name")
    var fullName = firstName + lastName
    document.write(fullName)
}
greet()*/

//TASK:3-------
/*function add() {
    var a = prompt("Enter a number1")
    var b = prompt("Enter a number2")
    var sum = (+a) + (+b)
    document.write(sum)
}
add()*/


//TASK:4------CALCULATOR User Input return
/*
var num1 = prompt("Enter a number 1: ")
var num2 = prompt("Enter a number 2: ")
var oper = prompt("Enter a Operator : ")
function calculator(num1, num2, oper) {
    var sum, sub, mul, div
    if (oper == "+") {
        return sum = (+num1) + (+num2)
    } else if (oper == "-") {
        return sub = num1 - num2
    } else if (oper == "*") {
        return mul = num1 * num2
    } else if (oper == "/") {
        return div = num1 / num2
    } else {
        return "Invalid Operator"
    }
}
var result = calculator(num1, num2, oper)
document.write("Arithmetic Operation: " + num1 + "" + oper + "" + num2 + "=" + result)*/


//TASK:5---
// Two parameter in this method x and y are same value so find square
/*function squares(x, y) {
    document.write(x * y)
}
squares(4, 4)
document.write("<br>")
squares(6, 6)*/

//One parameter--------
/*function squares(x) {
    document.write("Square of " + x + " is " + x * x)
}
squares(3)
document.write("<br>")
squares(2)*/

//TASK:6-------Factorial!
//While loop
/*function factorial(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
document.write(factorial(6));*/

//Function factorial ternary condition
/*function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
alert(factorial(5));*/


//TASK:7-----------
/*var user = prompt("Enter a words")
function counting() {
    document.write(user.length)
}
counting()*/



//TASK:8------Nested Function

/*function triangle(base, perpendicular) {
    // var hyp = base * base + perpendicular * perpendicular
    // document.write(hyp)
    document.write(Math.sqrt(base * base + perpendicular * perpendicular))
}
function hypotenuse() {
    document.write("Hypoteneus*Hypoteneus=base*base+perpendicular*perpendicuar:")
}
hypotenuse()
triangle(3, 4)*/

//Function hypot ---Hypoteneus Direct
//document.write(Math.hypot(3, 4))


//TASK:9----Area Of A Triangle
/*var width = prompt("Enter a width")
var height = prompt("Enter a height")
function area(width, height) {
    var A = width * height
    document.write("Area of a Triangle: " + A)
}
area(width, height)*/

//TASK:10------PALINDROME

/*function palind() {
    var word = prompt("Enter Your Word");
    var check = "";
    for (var i = word.length - 1; i >= 0; i--) {
        check += word[i]
    }
    if (word === check) {
        console.log(word + " is palindrome word")
    }
}
palind()*/