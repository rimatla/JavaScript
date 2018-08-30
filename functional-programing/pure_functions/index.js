/*Pure Functions - returns the same result every time, same input return same output, immune to data/state change, */

//Pure function
priceAfterTax = (productPrice) => {
    return (productPrice * 0.075) + productPrice;
};

console.log(priceAfterTax(200));

//Impure function
//An impure function is a function that mutates variables/state/data outside of it’s lexical scope,
let tax = 20;
calculateTax = (productPrice) => {
    //function depends on an external tax variable
    return (productPrice * (tax/100)) + productPrice;
};

console.log(calculateTax(300));

let xs = [1, 2, 3, 4, 5];

// slice is pure because it returns the same output per input every time, guaranteed.
// splice, however, will chew up its array and spit it back out forever changed which is an observable effect.
// pure
console.log(xs.slice(0, 3));
//=> [1, 2, 3]

console.log(xs.slice(0, 3));
//=> [1, 2, 3]

console.log(xs.slice(0, 3));
//=> [1, 2, 3]


// impure
console.log(xs.splice(0, 3));
//=> [1, 2, 3]

console.log(xs.splice(0, 3));
//=> [4, 5]

console.log(xs.splice(0, 3));
//=> []