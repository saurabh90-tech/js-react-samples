class User{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}


let obj = new User("John Doe");
console.log(obj.getName());