//functions are values
function triple(x) {
    return x * 3;

}
//console.log(triple(30));

//Higher Order Functions are functions that can be passed into other functions

//Example 1 ie:filter
//Filter is a function that accepts another function as its argument, returning a new FILTERED version on an array


let animals = [
    {name: 'Zilu', species: 'cat'},
    {name: 'Dara', species: 'dog'},
    {name: 'Luna', species: 'cat'},
    {name: 'Simba', species: 'lion'},
    {name: 'Juju', species: 'snake'},
];

/**************filter all cats***********************/

//for loop approach
let cats = []; //dog array
for (let i=0; i < animals.length; i++) {
    if (animals[i].species === 'cat')
        cats.push(animals[i]) //create a new cat array filtering the rest
}
console.log(
    JSON.stringify(cats, null, 2)
);


//filter approach
let cats = animals.filter(animals => animals.species === 'cat'); //returns doesn't need its 'key word' when on the same line

console.log(
    JSON.stringify(cats, null, 2)
);


//break callback function into a separate variable
let areCats = animals => animals.species === 'cat';

let cats = animals.filter(areCats);
console.log(
    JSON.stringify(cats, null, 2)
);


//opposite
let notCat = animals.filter(animals => animals.species !== 'cat');

console.log(
    JSON.stringify(notCat, null, 2)
);