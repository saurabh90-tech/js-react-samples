function increment(){
    var counter = 10; //scope is local to funciton increment
    console.log("counter value is: " + counter)
}

increment()
console.log(counter); //we cannot access the counter variable here