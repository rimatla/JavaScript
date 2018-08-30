//OBJECTS
//var person = {};

//Arrays are objects
var person = [];
var plea = 'Would you'
person.name = 'Mrs White';
//console.log(person.name);



//object literal
var person = {
  'name' : 'Mrs. White'
}

// console.log(typeof person === 'array');
// console.log(typeof person === 'object');


// Exercises
// Create an object using bracket and dot notation that represents the characters and related data
// you may find in a game of Clue.

// BRACKET notation
var clue = [];
clue.name = ['Mr. Green', 'Mrs. Peacock', 'Miss Scarlet'];
clue.name[0] = 'Jonas J';
clue.weapon = ['knife', 'poison', 'gun'];
clue['animals'] = ['cat', 'dog', 'fish'];

//console.log(clue.name[2]);
//console.log(clue.weapon[2]);
console.log(clue);
