let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name:{
        firstName,
        lastName
    }
} = employee;

console.log(firstName);
console.log(lastName);