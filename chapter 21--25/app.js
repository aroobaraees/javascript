// Q 1


// var firstName = prompt("Enter your first name:");
// console.log(firstName);

// var lastName = prompt("Enter your last name:");
// console.log(lastName);

// var fullName = firstName + lastName;
// console.log("Full Name: " + fullName);


// Q2
// var phoneModel = prompt("Enter your favorite mobile phone model:");

// console.log("my favorite mobile is Samsung Galaxy S6 Edge Plus "+ phoneModel . length);

// // Q3
// var word = "Pakistani";

// var result = word.lastIndexOf("n");

// document.write("String: " + word + "<br>");
// document.write("Last index of 'n': " + result);

// Q4

// var word = "hello world";
// console.log("word",word);
// console.log("last index of 'l'" , word.lastIndexOf("l"));


// Q5

// var word = "Pakistani";

// var result = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + result);


// Q6
// var firstName = "Arooba";
// var lastName = "Raees";

// var fullName = firstName.concat(" ", lastName);

// document.write(fullName);


// Q7

// var city = "Hyderabad";

// var result = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + result);

// // Q8
// var university = "University of Karachi";

// var result = university.search("and");

// document.write("String: " + university + "<br>");
// document.write("Index of 'and': " + result);


// Q9

// var value = "472";

// document.write("Value: " + value + "<br>");
// document.write("Type: " + typeof value + "<br><br>");

// var numberValue = Number(value);

// document.write("Value: " + numberValue + "<br>");
// document.write("Type: " + typeof numberValue);

// Q10

// var userInput = prompt("Enter any word:");

// var result = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Uppercase: " + result);

// Q11

// var userInput = prompt("Enter any word:");

// var firstLetter = userInput.charAt(0).toUpperCase();

// var remainingLetters = userInput.slice(1);

// var result = firstLetter + remainingLetters;

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + result);


// Q12

// var number = 35.36;

// var result = number.toString().replace(".", "");

// document.write("Number: " + number + "<br>");
// document.write("Result: " + result);

// Q13


// let username = prompt("Enter your username:");

// while (
//   username.includes("@") ||
//   username.includes(".") ||
//   username.includes("!")
// ) {
//   username = prompt("Please enter a valid username:");
// }

// alert("Valid username: " + username);

// // Q14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

// let searchItem = userInput.toLowerCase();

// let index = A.indexOf(searchItem);

// if (index !== -1) {
//   alert(searchItem + " is available at index " + index + " in our bakery");
// } else {
//   alert("We are sorry. " + searchItem + " is not available in our bakery");
// }


// // Q15
// var password = prompt("Enter your password:");

// var hasAlphabet = false;
// var hasNumber = false;

// // Check alphabets and numbers
// for (var i = 0; i < password.length; i++) {
//   var code = password.charCodeAt(i);

//   // A-Z or a-z
//   if (
//     (code >= 65 && code <= 90) ||
//     (code >= 97 && code <= 122)
//   ) {
//     hasAlphabet = true;
//   }

//   // 0-9
//   if (code >= 48 && code <= 57) {
//     hasNumber = true;
//   }
// }

// // Validation
// if (password.length < 6) {
//   alert("Password must be at least 6 characters long");
// } 
// else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//   alert("Password can not begin with a number");
// } 
// else if (!hasAlphabet || !hasNumber) {
//   alert("Password must contain alphabets and numbers");
// } 
// else {
//   alert("Valid Password");
// }


// // Q16


// var university = "University of Karachi";

// var result = university.split("");

// document.write(result.join("<br>"));


// Q17


// var userInput = 
// prompt("Enter any word:");

// var lastCharacter = userInput.charAt(userInput.length - 1);

// document.write("Last character is: " + lastCharacter);


// // Q18
// var text = "The quick brown fox jumps over the lazy dog";

// var count = 0;
// var index = text.toLowerCase().indexOf("the");

// while (index !== -1) {
//     count++;
//     index = text.toLowerCase().indexOf("the", index + 1);
// }

// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the'");