function getUsers(callback){
    setTimeout( () => {
        callback( [
            {username : 'john', email : 'john@test.com'},
            {username: 'jane', email:'julie@gmail.com'}
        ]);
    }, 1000);    
}

function findUser(username,callback){
    getUsers((users) => {
        const user = users.find( (user) => user.username === username);
        callback(user);
    });
}

findUser('jane',console.log);