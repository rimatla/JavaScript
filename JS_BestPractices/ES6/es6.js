for(var i =0; i<10; i++){
    console.log(i);
}
console.log('I see i happening ' + i + ' times.');


/**
 * let
 */
// -let keyword creates block scoping in JavaScript in locations where we weren't able to do so before
// -Allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
// -It is unlike the 'var' keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
// -In its most basic form, let is a sibling to var. But declarations made with let are scoped to the blocks in which they occur, rather than being "hoisted" to the enclosing function's scope as vars do:

for(let j = 0; j <11; j++){
    console.log('Let happened ' + j + ' times.');
}
