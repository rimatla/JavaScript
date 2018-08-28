/**
 * let
 */
// -let keyword creates block scoping in JavaScript in locations where we weren't able to do so before
// -Allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
// -It is unlike the 'var' keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
// -In its most basic form, let is a sibling to var. But declarations made with let are scoped to the blocks in which they occur, rather than being "hoisted" to the enclosing function's scope as vars do:

for(let i = 0; i < 45; i++){
    //create newDivs
    var newDiv = document.createElement('div');
    //add click handler to div
    newDiv.onclick = function() {
        alert('you clicked on box #' + i);
    };
    //where to place newly created divs
    document.getElementsByTagName('section')[0].appendChild(newDiv);
}
