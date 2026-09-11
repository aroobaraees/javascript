



// Q1

var date = new Date();
document.write(date);

// Q2

var date = new Date();

var months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

var month = months[date.getMonth()];

document.write("Current month: " + month);
// Q3
var date = new Date();

var days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];

var day = days[date.getDay()];

document.write("Today is " + day.slice(0, 3));


// Q4

var date = new Date();
var day = date.getDay();

if (day === 0 || day === 6) {
    document.write("It's Fun day");
}

// Q5

var date = new Date();

if (date.getDate() <= 15) {
    document.write("First fifteen days of the month");
}

// Q6


var currentDate = new Date();

var milliseconds = currentDate.getTime();
var minutes = milliseconds / (1000 * 60);

document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes);

// Q7


var date = new Date();
var hours = date.getHours();

if (hours < 12) {
    document.write("It's AM");
} else {
    document.write("It's PM");
}


// Q8



var laterDate = new Date(2020, 12, 0);

document.write("Later date: " + laterDate);


// Q9


var ramadan = new Date("June 18, 2015");
var today = new Date();

var difference = today.getTime() - ramadan.getTime();

var days = Math.floor(difference / (1000 * 60 * 60 * 24));

document.write(days + " days have passed since 1st Ramadan, 2015");

// Q10

var currentDate = new Date();
var startDate = new Date("January 1, 2015");

var difference = currentDate.getTime() - startDate.getTime();

var seconds = Math.floor(difference / 1000);

document.write("Our reference date: " + currentDate + "<br>");
document.write(seconds + " seconds have passed since beginning of 2015");


// Q11

var currentDate = new Date();

var oneHourAgo = new Date(currentDate.getTime() - (60 * 60 * 1000));

document.write("Current date: " + currentDate + "<br>");
document.write("1 hour ago, it was: " + oneHourAgo);

// Q12


var currentDate = new Date();

var hundredYearsAgo = new Date(currentDate);
hundredYearsAgo.setFullYear(currentDate.getFullYear() - 100);

document.write("Current date: " + currentDate + "<br>");
document.write("100 years back, it was: " + hundredYearsAgo);

// Q13

var birthYear = +prompt("Enter your birth year:");

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);


// Q14



var customerName = prompt("Enter customer name:");
var units = +prompt("Enter number of units:");
var chargesPerUnit = +prompt("Enter charges per unit:");

var netAmount = units * chargesPerUnit;

var lateSurcharge = 350;

var grossAmount = netAmount + lateSurcharge;

document.write("<h1>K-Electric Bill</h1>");

document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + new Date().toLocaleString("en-US", {
    month: "long"
}) + "<br>");

document.write("Number of units: " + units + "<br>");
document.write("Charges per unit: " + chargesPerUnit + "<br><br>");

document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));