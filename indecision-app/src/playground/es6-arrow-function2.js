// Arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};

console.log(add(33, 1, 1000));

// this keyword - no longer bound

const user = {
  name: "Jeruis",
  cities: ["Floripa", "Palhoça", "Biguaço"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " morou em " + city);
    // this.cities.forEach(city => {
    //   console.log(this.name + " morou em " + city);
    // });

    // return cityMessages;
  }
};
console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the number have been multiplied

  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply()); // [1, 2, 3], 2 [2, 4, 6]
