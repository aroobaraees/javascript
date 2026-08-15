



// chapter arrays




// Q1      empty array using js literal notation

// var studentName = []

// console.log("[]");

  


// Q2       empty array using js object notation


// var studentNames = new Array();
// console.log(studentNames);


// Q3    strings array



// var teaName = ["Doodh Patti Chai", "Karak Chai", "Green Tea", "Kashmiri Chai", "Masala Chai",];
// console.log(teaName);


// Q4 numbers array


// var numbers = ["10", "20", "30", "40", "50", "60", "70", "80", "90","100"]
// console.log(numbers);


// Q5   Boolean array


// var status = [true, false, true, false];
// console.log(status);


// Q6     mixed arrays

// var mixedArrays = ["Arooba", 19, "Karachi", true,];
// console.log(mixedArrays);



// Q7 qualifications array

// var qualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//    " M.phil",
//    "PHD",
// ];
// document.write("<h2>qualifications;</h2>");

// for(var i = 0; i <qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }


// Q8     student names and percentages



// var studentsName = ["Micheal ", "Jhon ", "Tony "];

// var scores = [320, 230, 480];

// var totalMarks = 500;

// for (var i = 0; i <studentsName.length; i++) {
//     var percentage = ( scores [i] / totalMarks ) * 100;
//     document.write(" scores of " +  studentsName [i] + " is " + scores [i] + " percentage " + percentage +  "% <br>");
// }



// // Q9 color array


// var colors = ["Red", "Green", "Blue", "Yellow"];

// document.write("Original Array: " + colors + "<br>");

// var color1 = prompt("Enter color to add at beginning:");
// colors.unshift(color1);
// document.write("After adding at beginning: " + colors + "<br>");

// var color2 = prompt("Enter color to add at end:");
// colors.push(color2);
// document.write("After adding at end: " + colors + "<br>");

// colors.unshift("Pink", "Purple");
// document.write("After adding two colors: " + colors + "<br>");

// colors.shift();
// document.write("After deleting first color: " + colors + "<br>");

// colors.pop();
// document.write("After deleting last color: " + colors + "<br>");

// var index = +prompt("Enter index:");
// var color3 = prompt("Enter color name:");
// colors.splice(index, 0, color3);
// document.write("After adding at index: " + colors + "<br>");

// var deleteIndex = +prompt("Enter index to delete:");
// var deleteCount = +prompt("How many colors to delete?");
// colors.splice(deleteIndex, deleteCount);

// document.write("Final Array: " + colors);


// Q10  student scores


// var scores = [320,230.480,120];

// document.write("scores of students" + scores + "</br>");

// scores.sort(function(a, b) {
//     return a - b;
// });

// document.write("ordered scores of student" + scores);


// Q11 
