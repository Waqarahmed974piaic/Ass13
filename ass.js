//Changing Case
var input1=prompt("Enter the name:");
alert(input1.toUpperCase())
var input2=prompt("Enter the name:")
alert(input2.split(' ')
.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
.join(' '))
//String Measuring the length and extracting parts
var userInput=prompt("Enter the Mobile Phone model:")
alert("Length is "+userInput.length)
alert("Last charcter of "+userInput+" is "+userInput.charAt(userInput.length-1))
//Strings:Finding Segments
var name="Pakistani"
alert(name.indexOf("n"))
var input3=prompt("Enter the name:")
if(input3.includes("@")||input3.includes(",")||input3.includes(",")){
    alert("Invalid Username")
}
else{
    alert("Thanks")
}
var str="The quick brown fox jumps over the lazy dog"
var i=0
if(str.indexOf("the")!==-1){
    i++;
}
alert("the count of keyword is "+i)
//Strings Finding a charcter at a location
var pak="Pakistani"
alert(pak.charAt(2))
var hyd="Hyderabad"
alert(hyd.replace("Hyder","Islam"))
var message ="Ali and sami are the best friends"
alert(message.replace(/and/g,"$"))
var pos=+prompt("Enter the positive number:")
alert(Math.round(pos))
alert(Math.floor(pos))
alert(Math.ceil(pos))
var neg=+prompt("Enter the positive number:")
alert(Math.round(neg))
alert(Math.floor(neg))
alert(Math.ceil(neg))
//Generating Random Numbers
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);;
alert(numberOfStars)
var secretNumber=+prompt("Enter the number:")
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var numberOfStars = Math.floor(improvedNum);
if(numberOfStars===secretNumber){
    alert("Congrats")
}
else{
    alert("Try Again")
}
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
if(numberOfStars===1){
    alert("Tails")
}
else{
    alert("Heads")
}
//Converting String to Integers and Decimals
var weight=prompt("Enter your weihgt:")
alert(parseInt(weight))
alert(parseFloat(weight))
//Converting String to Numbers and Numbers to Strings
var number=prompt("Enter the number:")
alert(Number(number)+" Type of this number which you enter in prompt is "+typeof(number))
var num=36.56
alert(num.toString().replace(".",""))
//Controlling the length of decimals
var percentage=(30/45)*100
alert(percentage.toFixed(2))