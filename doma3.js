//  Prva zadaca

//  a.
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]);
fruits.push("pear");

//  b.
let person = {
  name: "Keti",
  age: "39",
  city: "Skopje",
};
console.log(person.city);
person.age = 40;

console.log(fruits.concat(person));

//  Vtora zadaca

//  a.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//  b.
let start = 3;
let end = 10;
let i = 0;
for (let i = start; i <= end; i++) {
  console.log(i);}

//  v.
let person1 = {
  name: "Keti",
  age: "39",
  city: "Skopje",
};
for (let key in person1) {
  console.log(key + ": " + person1[key]);
}

//  g.
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color.length + " " + color);
}

//  Treta zadaca

//  a.
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

//  b.
let num = 10;
do {
  console.log(num);
  num--;
} while (num > 5);
console.log(num);

//  a.
function multiply(num1, num2) {
  let result1 = 0;
  return num1 * num2;
}

let result1 = multiply(120, 12);
console.log(result1);

//  b.
let divide = function (x, y) {
  let result2 = 0;
  return x / y;
};
let result2 = divide(120, 10);
console.log(result2);

//  v.
let subtract = (c, d) => c - d;
{
  let result3 = 0;
}
let result3 = subtract(120, 10);
console.log(result3);

//  Petta zadaca

let numbersArray = [10, 20, 30, 40, 50];
function calculateArraySum(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  console.log(sum);
}
calculateArraySum(numbersArray);

//  Shesta zadaca

let students = [];

students[1] = {
  name: "Sandra",
  surname: "Kostovska",
  age: 19,
  address: {
    city: "Prilep",
    street: {
      name: "Pane Taleski",
      number: 24,
    },
    zipCode: "7500",
  },
};
students[2] = {
  name: "Marko",
  surname: "Volchevski",
  age: 21,
  address: {
    city: "Berovo",
    street: {
      name: "Marshal Tito",
      number: 54,
    },
    zipCode: "2330",
  },
};
console.log(students[1].address.city);
console.log(students[2]["address"]["street"]["name"]);

//  Sedma zadaca
//  a.

function myFunction(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log("number");
  }
}
myFunction(30);

// // b.

function myFunction1(month) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "Octomber":
    case "December":
      console.log(31);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(30);
      break;
    case "February":
      console.log(28);
      break;
    default:
      console.log("Invalid input");
  }
}
myFunction1("February");

//  Osma zadaca

//  a.
let book = {
  name: "Harry Potter",
  autor: "J.K.Rowling",
  publisher: "Bloomsbury",
  aboutBooks: {
    number: 7,
    genre: {
      typeOfGenre: "fantasy",
      theme: ["prejudice", "corruption", "death"],
      firstBook: {
        name: "Philosopher's Stone",
        published: 1997,
      },
      lastBook: {
        name: "Deathly Hallows",
        published: 2007,
      },
    },
    language: "English",
  },
  website: "	www.wizardingworld.com",
};

//  b.
let car = {
  brand: "Toyota",
  model: {
    type: "Corolla",
    subtype: "Sedan",
  },
  color: "blue",
  year: 2023,
  class: {
    name: "executive",
    accessories: {
      exterior: [
        "AVAS",
        "Smartphon integation with Android Auto and Apple CarPlay",
      ],
      interior: ["luxury", "leather"],
    },
  },
};

//  v.
let student = {
  name: "Anja",
  surname: "Petrovska",
  age: 20,
  address: {
    city: "Skopje",
    street: {
      name: "Vladimir Komarov",
      number: 16,
    },
    zipcode: 1000,
  },
  university: {
    name: "Ss. Cyril and Methodius University",
    faculty: {
      name: "Faculty of dentistry",
      direction: "dental tehnician",
    },
  },
};

//  Devetta zadaca

//  a.
let odd = [];
for (i = 1; i <= 100; i += 4) {
  console.log(i);
}

//  b.
let even = [];
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
