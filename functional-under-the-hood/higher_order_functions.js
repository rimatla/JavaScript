/*jshint esversion: 6 */

//higher order functions takes a function as an input (argument)
var increment = function(n){ return n + 1; };
var square = function(n){ return n*n; };
var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

//convert to ES6
const increment2 = (n) => n + 1;
const square2 = (n) => n * n;
const doMathSoIDontHaveTo2 = (n, func) => func(n);

console.log(doMathSoIDontHaveTo2(5, square));
console.log(doMathSoIDontHaveTo2(4, increment));
