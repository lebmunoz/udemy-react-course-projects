
// Setup constructor to take name and age (default to 0)
// getDescription - Luis Enrique is 29 years old.

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi, I am ' + this.name + '!S';
    return `Hi, I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    
    return description;
  }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Luis Enrique. I'm visiting from Florianopolis.
// 1. Hi, I am Luis Enrique.

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  // hasHomeLocation() {
  //   return !!this.homeLocation;
  // }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Luis Enrique', 29, 'Information Systems');
console.log(me);
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other);
console.log(other.getGreeting());