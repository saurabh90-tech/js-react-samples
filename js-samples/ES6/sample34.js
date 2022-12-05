function getUsers(){
    return[
        {username : 'john', email : 'john@test.com'},
        {username: 'jane', email:'julie@gmail.com'}
    ];
}

function findUser(username){
    const users = getUsers();
    const user = users.find( (user) => user.username === username);
    return user;
}

console.log(findUser('john'));