function greet(name, callback){
    console.log('Hi ' + ' ' + name);
    callback();
}

function callMe(){
    console.log("I am callback function")
}

greet('John',callMe); //passing function as a paramter