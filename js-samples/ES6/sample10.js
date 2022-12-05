function sum(...args){
    let total = 0;
    for( const a of args){
        total += a;
    }

    return total;
}

console.log(sum(1,2,3));