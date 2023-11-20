//  Prva zadacha

function printFunc(seconds) {
  if (typeof seconds !== "number") {
    console.log("Please enter number");
    return;
  }
  if (seconds > 9) {
    console.log("Please enter one digit number");
    return;
  }
  setTimeout(function () {
    console.log("Coding is not that hard!");
  }, 3000);
}

printFunc(2);

// Vtora zadacha

// 2.1
const x = 25;
const y = x;
function checkEquals() {
  return new Promise(function (resolve, reject) {
    if (x === y) {
      resolve("The numbers are equal");
    } else {
      reject("Wrong");
    }
  });
}
checkEquals()
  .then(function () {
    console.log("Correct");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });

async function checkEqualsNum() {
  try {
    const equalNum = await checkEquals();
    console.log(equalNum);
  } catch {
    console.log("Error");
  }
}
checkEqualsNum();

// 2.2

const z = 20;

function checkResult() {
  return new Promise(function (resolve, reject) {
    if (z % 3 === 0) {
      resolve("The number is dividible with 3");
    } else {
      reject("Some error has occurred");
    }
  });
}
checkResult()
  .then(function () {
    console.log("Correct");
  })
  .catch(function () {
    console.log("Error");
  });

async function checkResults() {
  try {
    const div = await checkResult();
    console.log(div);
  } catch {
    console.log("Error");
  }
}
checkResults();

// 2.3

const a = 12;
const b = 8;
function checkAdding() {
  return new Promise(function (resolve, reject) {
    if (a + b === 20) {
      resolve("The adding is correct");
    } else {
      reject("The adding is incorrect");
    }
  });
}
checkAdding()
  .then(function () {
    console.log("Correct");
  })
  .catch(function () {
    console.log("Incorrect");
  });

async function checkAddResult() {
  try {
    const adding = await checkAdding();
    console.log(adding);
  } catch {
    console.log("Incorrect");
  }
}
checkAddResult();

// 2.4

const toys = 12;

function checkToys() {
  return new Promise(function (resolve, reject) {
    if (toys >= 20) {
      resolve("All the toys are there");
    } else {
      reject("Missing toys");
    }
  });
}
checkToys()
  .then(function () {
    console.log("All the toys are there");
  })
  .catch(function () {
    console.log("Error");
  });

async function checkNumberOfToys() {
  try {
    const toysNumber = await checkToys();
    console.log(toysNumber);
  } catch {
    console.log("Error");
  }
}
checkNumberOfToys();

// 2.5
const boys = 16;
const girls = 15;
function classroom() {
  return new Promise(function (resolve, reject) {
    if (boys >= girls) {
      resolve("True");
    } else {
      reject("False");
    }
  });
}
classroom()
  .then(function () {
    console.log("True");
  })
  .catch(function () {
    console.log("Error");
  });

async function checkNumberOfToys() {
  try {
    const students = await classroom();
    console.log(students);
  } catch {
    console.log("Error");
  }
}
checkNumberOfToys();

// Treta zadacha

const checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("The number is even");
    } else {
      reject("The number is odd");
    }
  });
};

const handleSuccess = (message) => console.log(message);
const handleError = (error) => console.log(error);
checkNumber(60)
  .then((message) => handleSuccess(message))
  .catch((error) => handleError(error));

// Cetvrta zadacha

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
        email: "john@example.com",
      });
    }, 2000);
  });
}

async function displayUserDetails() {
  try {
    const userDetails = await fetchData();
    console.log(userDetails);
  } catch {
    console.log("Error");
  }
}
displayUserDetails();

// Petta zadacha

function calculateSquareRoot(number) {
  try {
    if (number < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(number);
  } catch (error) {
    new Error("Error occurred during square root calculation");
    console.log(error);
  } finally {
    console.log("Square root calculation completed.");
  }
}
console.log(calculateSquareRoot(10));
