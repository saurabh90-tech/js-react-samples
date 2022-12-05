function getUsers(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve([
                {username : 'john', email : 'john@test.com'},
                {username: 'jane', email:'julie@gmail.com'}
            ])
        },1000)
    });
}

function onFulfilled(users){
    console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);