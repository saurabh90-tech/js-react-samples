function date(d = today()){
    console.log(d);
}

function today(){
    return ( new Date().toLocaleDateString("en-US"));

}

date();