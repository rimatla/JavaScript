/*jshint esversion: 6 */

var abc = function(a, b) {
  return [a, b];
};

//when you create a function that can be called multiple times with different values
const curry = (fn) => {
  return (arg) => {
    return(arg2) => {
      return fn(arg, arg2);
    };
  };
};

var curried = curry(abc);
console.log(curried());
