'use strict'



const john = {
    firstName: 'John',
    lastName: 'Cena',
    age: 2023 - 1985,
    job: 'Wrestler',
    friends: ['Undertaker','Roman', 'Rock'],
};

console.log(john);
console.log(john.firstName);
console.log(john['age']);

const nameKey = 'Name';

console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if(john[interestedIn]){
    console.log(john[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[0]}`);


