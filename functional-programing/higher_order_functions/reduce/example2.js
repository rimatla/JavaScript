//transform the data.txt file into a array of objects

//fs name space from node
let fs =  require('fs');

//read file
let output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t')) //create new array of existing array and trim tabs
    .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    return customers;
    },{});

console.log('output', JSON.stringify(output, null, 2));

/*
trim() - removes whitespace from both ends of a string
split() - splits a String object into an array of strings by separating the string into substring using a specified separator (ie:\n) string to determine where to make each split.
reduce() - takes two arguments, first takes a function, second a starting object ie: a object literal.
*/