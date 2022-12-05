const person = Object.freeze({ age: 20 });
person.age = 23;

console.log(person.age);
