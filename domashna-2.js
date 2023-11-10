// Prva zadaca
// a.
let globalNum = 10;
function checkScope() {
  console.log(globalNum);
}
checkScope();


// b.
let globalNum1 = 10;
function checkSkope() {
  let localNum = globalNum1;
  console.log(localNum);
}
checkScope();
console.log(globalNum1 === localNum);  // Output:  ReferenceError: localNum is not defined


// v.

if (true) {
  let blockNum = 10;
}
console.log(typeof blockNum); // Output: undefined


// Vtora zadaca
// a.

let num = 10;
if (num % 2 === 0) {
  console.log("This is even number");
} else {
  console.log("This is odd number");
}


// b.
let age = 18;
if (age >= 18) {
  console.log("The person has right to vote");
} else {
  console.log("The person hasn't right to vote");
}


// v.
let score = 78;
if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: D");
} else if (score >= 0 && score <= 59) {
  console.log("Grade: F");
} else {
  console.log("Invalid score! Please enter a score between 0 and 100");
}


// g.
let dayNumber = "6";
switch (dayNumber) {
  case "1":
    console.log("The day is Sunday");
    break;
  case "2":
    console.log("The day is Monday");
    break;
  case "3":
    console.log("The day is Tuesday");
    break;
  case "4":
    console.log("The day is Wednesday");
    break;
  case "5":
    console.log("The day is Thursday");
    break;
  case "6":
    console.log("The day is Friday");
    break;
  case "7":
    console.log("The day is Saturday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7");

}


// Treta zadaca

function addNumbers(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}

console.log(addNumbers(12, 15, 17));




function addString() {
  console.log("Apple");
}
addString();


// function addString() {
// return "Apple";
// }
// console.log(addString());



function compareNum(number1, number2) {
  if (number1 === number2) {
    console.log("These numbers are equal");
  } else {
    console.log("These numbers are not equal");
  }
}

compareNum(20, 23);