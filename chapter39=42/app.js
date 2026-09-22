


// Q1


// function power(a, b) {
//     return Math.pow(a, b);
// }

// var a = +prompt("Enter base:");
// var b = +prompt("Enter power:");

// document.write("Answer = " + power(a, b));



// Q2



// function isLeapYear(year) {

//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return "It is a leap year";
//     }
//     else {
//         return "It is not a leap year";
//     }
// }

// var year = +prompt("Enter year:");

// document.write(isLeapYear(year));




// Q3



// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {

//     var S = calculateS(a, b, c);

//     var area = Math.sqrt(
//         S * (S - a) * (S - b) * (S - c)
//     );

//     return area;
// }

// var a = +prompt("Enter side a:");
// var b = +prompt("Enter side b:");
// var c = +prompt("Enter side c:");

// document.write("Area of triangle = " + calculateArea(a, b, c));




// Q4



// function calculateAverage(marks1, marks2, marks3) {

//     return (marks1 + marks2 + marks3) / 3;
// }


// function calculatePercentage(marks1, marks2, marks3) {

//     var total = marks1 + marks2 + marks3;

//     return (total / 300) * 100;
// }


// function main() {

//     var marks1 = +prompt("Enter marks of subject 1:");
//     var marks2 = +prompt("Enter marks of subject 2:");
//     var marks3 = +prompt("Enter marks of subject 3:");

//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3);

//     document.write("Average = " + average + "<br>");
//     document.write("Percentage = " + percentage + "%");
// }

// main();




// Q5




// function myIndexOf(string, character) {

//     for (var i = 0; i < string.length; i++) {

//         if (string[i] == character) {
//             return i;
//         }
//     }

//     return -1;
// }

// var string = prompt("Enter a string:");
// var character = prompt("Enter a character:");

// document.write("Index = " + myIndexOf(string, character));


// Q6




// function removeVowels(sentence) {

//     var result = "";

//     for (var i = 0; i < sentence.length; i++) {

//         var character = sentence[i];

//         if (
//             character != "a" &&
//             character != "e" &&
//             character != "i" &&
//             character != "o" &&
//             character != "u" &&
//             character != "A" &&
//             character != "E" &&
//             character != "I" &&
//             character != "O" &&
//             character != "U"
//         ) {
//             result = result + character;
//         }
//     }

//     return result;
// }

// var sentence = prompt("Enter a sentence:");

// document.write(removeVowels(sentence));




// Q7





// function checkTwoVowels(text) {

//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {

//         var first = text[i];
//         var second = text[i + 1];

//         switch (first) {

//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":

//                 switch (second) {

//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":

//                         count++;
//                         break;
//                 }

//                 break;
//         }
//     }

//     return count;
// }

// var text = prompt("Enter a sentence:");

// document.write("Occurrences = " + checkTwoVowels(text));




// Q8



// function convertDistance(km) {

//     var meters = km * 1000;
//     var feet = km * 3280.84;
//     var inches = km * 39370.1;
//     var centimeters = km * 100000;

//     document.write("Meters = " + meters + "<br>");
//     document.write("Feet = " + feet + "<br>");
//     document.write("Inches = " + inches + "<br>");
//     document.write("Centimeters = " + centimeters);
// }

// var km = +prompt("Enter distance in kilometers:");

// convertDistance(km);

 

// Q9



// function calculateOvertime(hours) {

//     var overtimeHours = 0;
//     var overtimePay = 0;

//     if (hours > 40) {

//         overtimeHours = hours - 40;
//         overtimePay = overtimeHours * 12;
//     }

//     return overtimePay;
// }

// var hours = +prompt("Enter hours worked:");

// document.write("Overtime Pay = Rs. " + calculateOvertime(hours));




// Q10




// var amount = +prompt("Enter amount to withdraw:");

// var hundredNotes = Math.floor(amount / 100);

// var remaining = amount % 100;

// var fiftyNotes = Math.floor(remaining / 50);

// remaining = remaining % 50;

// var tenNotes = Math.floor(remaining / 10);

// document.write(
//     "You will have " +
//     hundredNotes + " hundred notes " +
//     fiftyNotes + " fifty notes " +
//     tenNotes + " ten notes."
// );




