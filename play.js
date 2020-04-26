const name = "Mike";
let age = 39;
const hasHobbies = true;

// name = "Michael"    
age = 30;

function summarizeUser(userName, userAge, userHasHobby){
  return "Name is " + userName + " age is " + userAge + " and the user has hobbies is: " + userHasHobby ;
}

console.log(name);
console.log(summarizeUser(name, age, hasHobbies));