class User{
    constructor(name){
        this.setName(name);
    }

    getName(){
        return this.name;
    }

    setName(newName){
        newName = newName.trim();
        if ( newName === ''){
            throw 'Name cannot be empty';
        }

        this.name = newName;
    }
}

let user = new User('John');
console.log(user);

user.setName('Julie');
console.log(user.getName());