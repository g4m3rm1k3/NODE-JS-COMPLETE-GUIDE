const name = "Mike";
let age = 39;
const hasHobbies = true;

// name = "Michael"    
age = 30;

// arrow function with =>
const summarizeUser = (userName, userAge, userHasHobby) =>{
  return ("Name is " + userName + " age is " + userAge + "User has hobbies: " + userHasHobby
);
};

// const add = (a, b) =>{
//   return a + b
// }

const add = (a,b) => a + b;
console.log(add(1,3))

const addOne = a => a + 1;
console.log(addOne(3));

// function as constant set to anonymous function
// const summarizeUser = function(userName, userAge, userHasHobby){
//   return "Name is " + userName + " age is " + userAge + " user has hobbies: " + userHasHobby
// }

// function summarizeUser(userName, userAge, userHasHobby){
//   return "Name is " + userName + " age is " + userAge + " and the user has hobbies is: " + userHasHobby ;
// }

console.log(name);
console.log(summarizeUser(name, age, hasHobbies));