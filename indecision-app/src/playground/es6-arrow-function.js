// function square(x) {
//   return x * x;
// }

// console.log(square(2));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = x => x * x;

// console.log(squareArrow(5));

// Challenge - Use arrow functions
// getFirstName("Mike Smith") -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// -----------------------------------------------

// const getFirstName = (fullNamer) => {
//   return fullNamer.split(" ")[0];
// };

const getFirstName = x => x.split(" ")[0];

const fullName = "Luis Enrique";
let firstName;

if (fullName) {
  //   firstName = getFirstName(fullName);
  console.log(getFirstName(fullName));
}
// console.log(firstName);

// Correção:

// const getFirstName = (fullNamee) => {
//     return fullNamee.split(" ")[0];
// }

const getFirstNameCorr = furstName => furstName.split(" ")[0];

console.log(getFirstNameCorr("Asasa sasasa"));
