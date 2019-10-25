var nameVar = "Jeruis";
var nameVar = "Asassaas";
console.log("nameVar", nameVar);

let nameLet = "Jão";
// let nameLet = "Oloco";
console.log("nameLet", nameLet);

const nameConst = "Frankq";
// const nameConst = "Frankqasas";
console.log("nameConst", nameConst);

function getPetName() {
  var petName = "Miu";
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = "Luis Enrique";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
