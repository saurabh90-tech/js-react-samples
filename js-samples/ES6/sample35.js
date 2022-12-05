function getUsers(){
    let users = [];


    setTimeout( () => {
        users = [
            {username : 'john', email : 'john@test.com'},
            {username: 'jane', email:'julie@gmail.com'}
        ];
    }, 1000);

    return users;
}

function findUser(username){
    const users = getUsers();
    const user = users.find( (user) => user.username === username);
    return user;
}

console.log(findUser('john'));//undefined