
let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

let findApple = fruit => fruit.name === 'apples';

//The find() method returns the value of the first element in the array that SATISFIES the provided testing function.
let myInventory = inventory.find(findApple);

console.log(myInventory);
