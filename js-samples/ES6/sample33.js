function* generate(){
    console.log('Invoked 1st time');
    yield 1;

    console.log('Invoked 2nd time');
    yield 2;
}

let gen = generate();

for( const g of gen){
    console.log(g);
}