// alert("javascript is working");


// Q1


// var input = prompt("Enter a character");

// var code = input.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//     document.write("It is a number");
// }
// else if (code >= 65 && code <= 90) {
//     document.write("It is an uppercase letter");
// }
// else if (code >= 97 && code <= 122) {
//     document.write("It is a lowercase letter");
// }
// else {
//     document.write("It is a special character");
// }


// Q2


// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// if (num1 > num2) {
//     document.write(num1 + " is larger");
// }
// else if (num2 > num1) {
//     document.write(num2 + " is larger");
// }
// else {
//     document.write("Both numbers are equal");
// }

// Q3


// var num = +prompt("Enter a number");

// if (num > 0) {
//     document.write("Positive number");
// }
// else if (num < 0) {
//     document.write("Negative number");
// }
// else {
//     document.write("Zero");
// }



// Q4

// var ch = prompt("Enter a character");

// if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
//     ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
//     document.write("True");
// }
// else {
//     document.write("False");
// }


// Q5


// var correctPassword = "admin123";
// var userPassword = prompt("Enter your password");

// if (userPassword == "") {
//     document.write("Please enter your password");
// }
// else if (userPassword == correctPassword) {
//     document.write("Correct! The password you entered matches the original password.");
// }
// else {
//     document.write("Incorrect password");
// }


// Q6


// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// document.write(greeting);

// var greeting;
// var hour = prompt("enter a hour");


// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// document.write(greeting);



// Q7

// var time = +prompt("Enter time in 24-hour format");

// if (time >= 0 && time < 1200) {
//     document.write("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening");
// }
// else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night");
// }
// else {
//     document.write("Invalid Time");
// }
