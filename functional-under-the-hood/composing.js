/*jshint esversion: 6 */

const compose = (fn, fn2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn(result);
  };
};

const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exclaim  = (statement) => {
  return `${statement.toUpperCase()}!`;
};

//compsing take two functions and combine them
const blame = compose(consider, exclaim);

console.log(blame('Batman'));

// => 'I think it could be... YOU!'
