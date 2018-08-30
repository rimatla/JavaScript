let animals = [
{name: 'Zen', species: 'rabbit'},
{name: 'Kit', species: 'cat'},
{name: 'Dara', species: 'dog'},
{name: 'Zilu', species: 'cat'},
{name: 'Jay', species: 'horse'}
];

//for loop example
let names = [];
for(let i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
//console.log(names);

// map example
let animalNames = animals.map(animal => animal.name); //whatever statement after the => is implicitly RETURNED
//console.log(animalNames);

//Since 'Map' expects the callback back function to return a new/transformed object that will be placed on a brand new array.
//We can use it to create a completely new object.
let newNames = animals.map(animal => `${animal.name} is a cute ${animal.species}`);
console.log(newNames);
