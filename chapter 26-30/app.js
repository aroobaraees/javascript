


// Q1

var number = 3.45214;

document.write("number: " + number + "<br>");
document.write("round off value: " + Math.round(number) + "<br>");
document.write("floor value: " + Math.floor(number) + "<br>");
document.write("ceil value: " + Math.ceil(number));



// Q2

var number = -2.673;

document.write("number: " + number + "<br>");
document.write("round off value: " + Math.round(number) + "<br>");
document.write("floor value: " + Math.floor(number) + "<br>");
document.write("ceil value: " + Math.ceil(number));

// Q3


var number = -4;

document.write("The absolute value of " + number + " is " + Math.abs(number));

// Q4


var dice = Math.floor(Math.random() * 6) + 1;

document.write("random dice value: " + dice);


// Q5


var coin = Math.floor(Math.random() * 2) + 1;

document.write(coin + "<br>");

if (coin === 1) {
    document.write("random coin value: Heads");
} else {
    document.write("random coin value: Tails");
}


// Q6

var number = Math.floor(Math.random() * 100) + 1;

document.write("random number between 1 and 100: " + number);


// Q7

var weight = prompt("Enter your weight in kilograms");

weight = parseFloat(weight);

document.write("The weight of user is " + weight + " kilograms");




// Q8


var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = prompt("Enter a number between 1 and 10");

userNumber = Number(userNumber);

if (userNumber === secretNumber) {
    alert("Congratulations! You guessed the secret number.");
} else {
    alert("Try again!");
}