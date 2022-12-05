function getScores(){
    return [50,70,90,100];
}

let [x,y,...args] = getScores();
console.log(x);
console.log(y);
console.log(args);