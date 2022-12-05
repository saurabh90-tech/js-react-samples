function getProfile(){
    return [
        'John',
        'Doe',
        ['Red','Green','Blue']
    ];
}

let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();

console.log(color1, color2, color3);