// Zadacha 1
class Car {
  constructor(make, model, year, mileage) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.mileage = mileage);
  }

  start() {
    console.log("Engine started.");
  }
  drive(distance) {
    if (distance > 0) {
      this.mileage = this.mileage + distance;
    } else {
      console.log("Invalid distance.");
    }
  }

  getMileage() {
    console.log(`The current mileage is ${this.mileage}`);
  }
}

const newCar = new Car("Toyota", "Corolla", 2023, 15000);
newCar.drive(50);
newCar.start();
newCar.getMileage();

// Zadacha 2

class Animal {
  constructor(dogRace, name, color) {
    this.dogRace = dogRace;
    this.name = name;
    this.color = color;
  }

  introduction() {
    console.log(`${this.name} is ${this.dogRace}.`);
  }

  description() {
    console.log(`${this.name} has ${this.color} fur.`);
  }
}
class Dog extends Animal {
  constructor(dogRace, name, color, gender, age) {
    super(dogRace, name, color);
    this.gender = gender;
    this.age = age;
  }

  myDog() {
    console.log(`My dog is ${this.age} years old.`);
  }

  dogGender() {
    return this.gender;
  }
}
const newAnimal = new Animal("pitbull", "Reks", "black");
const newDog = new Dog("cocker", "Lisa", "brown", "female", "3");
newAnimal.introduction();
newDog.myDog();
newDog.dogGender();
newAnimal.description();
newDog.description();
newDog.introduction();

// Zadaca 3

class Rectangle {
  #width;
  #height;
  constructor(color, width, height) {
    this.color = color;
    this.#width = width;
    this.#height = height;
  }

  get getWidth() {
    return this.#width;
  }

  get getHeight() {
    return this.#height;
  }

  set setWidth(newWidth) {
    this.#width = newWidth;
  }

  set setHeight(newHeight) {
    this.#height = newHeight;
  }

  static getShapeType() {
    return "Rectangle";
  }
  getArea() {
    return this.#width * this.#height;
  }

  describe() {
    console.log(
      `The rectangle has ${this.color} color,and it's dimensions are width ${
        this.#width
      }cm and height ${this.#height}cm.`
    );
  }
}
const rect = new Rectangle("red", 20, 5);

console.log(rect.getWidth);
console.log(rect.getHeight);
console.log(rect.getArea());
console.log(Rectangle.getShapeType());
rect.describe();

// Zadacha 4

class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `You have deposited ${amount}$ to your account. Your new balance is ${this.balance}$.`
      );
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;

      console.log(
        `You have withdrawn ${amount}$ from your account. Your new balance is ${this.balance}$.`
      );
    } else {
      console.log(
        `Invalid amount. Please enter a positive number that is less than or equal to your balance.`
      );
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(55145698, "Aneta", 1000);
const account2 = new BankAccount(62589655, "Bojan", 500);
account1.deposit(200);
account2.deposit(100);
account2.withdraw(700);
account1.withdraw(700);
