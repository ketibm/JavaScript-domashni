// Prva zadacha

let books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2010 },
  { title: "Book 3", author: "Author C", year: 2020 },
];

books.forEach((books) => console.log(books.title, books.author));

let firstBookPublishedAfter2000 = books.find(
  (firstBook) => firstBook.year > 2000
);
console.log(firstBookPublishedAfter2000);

//   Vtora zadacha
//  a.
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
};

let additionalInfo = {
  email: "johndoe@yahoo.com",
  phone: "077663322",
  education: {
    degree: "Low",
    major: "legal scinces",
  },
};
let combinedObject = { ...person, ...additionalInfo };
console.log(combinedObject);

//  b.
let user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
};
let { username } = user;
console.log(username);

let {
  fullName: { firstName, lastName },
} = user;
console.log(firstName, lastName);

let {
  contact: { email },
} = user;
console.log(email);

let {
  addresses: [
    { street: homeStreet, city: homeCity, state: homeState, zip: homeZip },
  ],
} = user;
console.log(homeStreet, homeCity, homeState, homeZip);

let {
  addresses: [
    ,
    { street: workStreet, city: workCity, state: workState, zip: workZip },
  ],
} = user;
console.log(workStreet, workCity, workState, workZip);

//   Treta zadacha

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let isEndingWithLand = countries.filter((country) => country.endsWith("land"));
isEndingWithLand = isEndingWithLand.map((country) =>
  country.toUpperCase(country)
);
console.log(isEndingWithLand);

let isEndingWithIa = countries.filter(
  (country) => country.endsWith("ia") && country.length > 7
);
console.log(isEndingWithIa);

// Cetvrta zadacha
let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
];

//  a.
let namePopularity = zooAnimals
  .filter((popularity) => popularity.popularity > 4)
  .forEach((animals) => console.log(animals.name));

//  b.
let oldestElephantName = zooAnimals
  .filter((animal) => animal.name === "elephants")[0]
  .residents.sort((a, b) => b.age - a.age)[0].name;
console.log(oldestElephantName);

//  v.
let pinguins = zooAnimals.filter((animal) => animal.name === "penguins")[0];
let femalePinguin = pinguins.residents.filter(
  (femPinguin) => femPinguin.sex === "female" && femPinguin.age < 10
)[0].name;
console.log(femalePinguin);

//  g.
let longestName = zooAnimals
  .sort((a, b) => b.name.length - a.name.length)
  .shift((animal) => longestName.name);
console.log(longestName);

let sumAgeLongestName = longestName.residents.reduce(
  (acc, curr) => acc + curr.age,
  0
);

console.log(sumAgeLongestName);

//  d
let smallestGroup = zooAnimals
  .sort((a, b) => a.residents.length - b.residents.length)
  .shift((animals) => animals.name).name;
console.log(smallestGroup);

let biggestGroup = zooAnimals
  .sort((a, b) => b.residents.length - a.residents.length)
  .shift((animals) => animals.name).name;
console.log(biggestGroup);

let groups = smallestGroup.concat(biggestGroup);
console.log(groups);

// Petta zadacha

let checkGrade = (grade) => {
  return grade >= 90 && grade <= 100
    ? "A"
    : grade >= 80 && grade <= 89
    ? "B"
    : grade >= 70 && grade <= 79
    ? "C"
    : grade >= 60 && grade <= 69
    ? "D"
    : grade >= 0 && grade <= 59
    ? "F"
    : "Invalid grade!";
};
console.log(checkGrade(75));
