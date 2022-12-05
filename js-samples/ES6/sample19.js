function stat(a,b){
    return[
        a + b,
        (a + b) / 2,
        a - b 
    ]
}

let [sum, average , difference] = stat(40,20);
console.log(sum, average, difference);