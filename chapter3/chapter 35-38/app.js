


// // Q1

// function showDateTime() {
//     var currentDate = new Date();
//     document.write(currentDate);
// }

// showDateTime();

// // Q2

// function getUserName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// document.write(getUserName(firstName, lastName));



// // Q3


// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));

// document.write(addNumbers(num1, num2));


// // Q4


// function calculator(num1, num2, operator) {
//     if (operator == "+") {
//         return num1 + num2;
//     }
//     else if (operator == "-") {
//         return num1 - num2;
//     }
//     else if (operator == "*") {
//         return num1 * num2;
//     }
//     else if (operator == "/") {
//         return num1 / num2;
//     }
//     else {
//         return "Invalid operator";
//     }
// }

// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));
// var operator = prompt("Enter operator (+, -, *, /):");

// document.write(calculator(num1, num2, operator));




// // Q5


// function square(num) {
//     return num * num;
// }

// var number = Number(prompt("Enter a number:"));

// document.write(square(number));



// // Q5



// function factorial(num) {
//     var result = 1;

//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// }

// var number = Number(prompt("Enter a number:"));

// document.write(factorial(number));


// // Q7


// function factorial(num) {
//     var result = 1;

//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// }

// var number = Number(prompt("Enter a number:"));

// document.write(factorial(number));


// // Q8


// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(number) {
//         return number * number;
//     }

//     var result = Math.sqrt(
//         calculateSquare(base) + calculateSquare(perpendicular)
//     );

//     return result;
// }

// var base = Number(prompt("Enter base:"));
// var perpendicular = Number(prompt("Enter perpendicular:"));

// document.write("Hypotenuse = " + calculateHypotenuse(base, perpendicular));


 // Q9


// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(number) {
//         return number * number;
//     }

//     var result = Math.sqrt(
//         calculateSquare(base) + calculateSquare(perpendicular)
//     );

//     return result;
// }

// var base = Number(prompt("Enter base:"));
// var perpendicular = Number(prompt("Enter perpendicular:"));

// document.write("Hypotenuse = " + calculateHypotenuse(base, perpendicular));



// function areaOfRectangle(width, height) {
//     return width * height;
// }

// var width = 10;
// var height = 5;

// document.write(areaOfRectangle(width, height));

// // Q10


// function checkPalindrome(str) {

//     var reverse = str.split("").reverse().join("");

//     if (str == reverse) {
//         return "It is a palindrome";
//     }
//     else {
//         return "It is not a palindrome";
//     }
// }

// var word = prompt("Enter a word:");

// document.write(checkPalindrome(word));



// Q11



// function checkPalindrome(str) {

//     var reverse = str.split("").reverse().join("");

//     if (str == reverse) {
//         return "It is a palindrome";
//     }
//     else {
//         return "It is not a palindrome";
//     }
// }

// var word = prompt("Enter a word:");

// document.write(checkPalindrome(word));




// Q12



// function longestWord(str) {

//     var words = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     return longest;
// }

// var text = prompt("Enter a sentence:");

// document.write(longestWord(text));



// Q13



// function countLetter(str, letter) {

//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() == letter.toLowerCase()) {
//             count++;
//         }
//     }

//     return count;
// }

// var text = prompt("Enter a string:");
// var letter = prompt("Enter a letter:");

// document.write(countLetter(text, letter));



// Q14


// function countLetter(str, letter) {

//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() == letter.toLowerCase()) {
//             count++;
//         }
//     }

//     return count;
// }

// var text = prompt("Enter a string:");
// var letter = prompt("Enter a letter:");

// document.write(countLetter(text, letter));

