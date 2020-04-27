const person = {
  name:'Mike',
  age: 39,
  greet(){
    console.log('Hi, I am ' + this.name);
  }
};

console.log(person);
person.greet();