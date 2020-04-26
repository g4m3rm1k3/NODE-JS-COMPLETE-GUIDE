var name = "Mike";
var age = 39;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
  return "Name is " + userName + " age is " + userAge + " and the user has hobbies is: " + userHasHobby ;
}

console.log(name);
console.log(summarizeUser(name, age, hasHobbies));