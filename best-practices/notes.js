/*************************************************************************************************
 * BEST WRITING PRACTICES
 * ************************************************************************************************/
//Global Scope
//1- Variables;
//2- functions()
//3- execute code

//Local Scope code inside another function()
//1- Variables;
//2- functions()
//3- execute code


/*************************************************************************************************
 * Semicolons
 ************************************************************************************************/
//wrong
var a = 12 //Compiler process tokens left to right, and as it goes to second line it will throw an error

//right
var b = 12;


/*************************************************************************************************
 * Curly Braces {}
 ************************************************************************************************/
// - Restricted Production: (continue, break, return, or throw).
// - When using curly braces, they must go in front of (continue, break, return, or throw).

//wrong
function returnObjectOne()
{
    if(someTrueThing)
    {
        return  //this will break
        {
            hi: hello
        }
    }
}

//right
function returnObjectTwo()
{
    if(someTrueThing)
    {
        return  {
            hi: hello
        }
    }
}

//For consistency sake this is how {} are usually written in JS.
function returnObject() {
    if (someTrueThing) {
        return {
            hi: hello
        }
    }
}


/*************************************************************************************************
 * Equality
 ************************************************************************************************/
// -Defines: =
// -Compares: == and ===
// -Strict equality, no 'type conversion': ===
// with double equals == :If variables are two different types it will convert them to be the same type ie: 1 and '1'

//Check if exist
var x = 1;
if (typeof x !== 'undefined') {
    console.log('exist');
} else {
    console.log('not exist');
}


/*************************************************************************************************
* Hoisting
* ************************************************************************************************/

//Hoisting is JS default behaviour of moving all declarations to the top of the current scope.
//Therefore, when compiled 'variables' are moved to the top of its scope, being that local or global.

//EcmaScripts Standards:
//1-Variables are created when their container environment are instantiated (created).
//2-Variables are INITIALIZED to UNDEFINED when first created.
//3-Declare all variables on top top of your scope


/*************************************************************************************************
 * Hoisting Variables
 * PS: Disclaimer - Don't Name your variables with the same name!
 *************************************************************************************************/

//JS Compiler enters the scope:
console.log(myVariable); //1- no var declarations here
var myVariable = 1;      //2- var is initialized and set to undefined
                         //3- executes code as "undefined"
                         //4- myVariable = 1;


//JS Compiler enters the scope:
var myVariableTwo = 2;         //1- var is initialized and set to undefined
console.log(myVariableTwo);    //2- myVariable is set to = 2;
                               //3- executes code myVariableTwo = 2;


/***********************************************************************************************/
var myVar = 10;
function hoist(){
    myVar = 20;
}
console.log( myVar); //output: 10 because hoist() is never called

/***********************************************************************************************/
var myVarTwo = 10;
function hoistAgain(){
    myVarTwo = 20;
}
hoistAgain();
console.log(myVarTwo); //output: 20 since now we called hoist()

/***********************************************************************************************/
var myVarThree = 10;
function hoistOneMoreTime(){
    var myVarThree = 5;
    var myVarThree;
    console.log(myVarThree); // Output: 5 cause we are console logging within the local scope
                             // If you declare a local variable and a global variable with the same name,
                             // The local variable will take precedence when you use it inside a function (local scope). This type of behavior is called SHADOWING
}
hoistOneMoreTime();

/***********************************************************************************************/
var myVarFour = 10;
function hoistMe(){
    // Each function has its own scope, and any variable declared within that function is only accessible from that function
    var myVarFour  = 5;
    var myVarFour;
}
hoistMe();
console.log(myVarFour ); //output: 10 cause we are console logging within the global scope

/***********************************************************************************************/
var myVarFive = 10;
function hoistUs(){
    console.log(myVarFive); //output: undefined due to how JS compiler works
    var myVarFive = 5;
    var myVarFive;
}
hoistUs();

/*************************************************************************************************
 * Hoisting Functions
 * ************************************************************************************************/
// -Function declarations are hoisted completely.
// -This means that the ENTIRE function’s body IS MOVED TO THE TOP. This allows you to call a function before it has been declared:

/***********************************************************************************************/
showState(); // output: Ready
function showState() {
    console.log("Ready");
}

var showState = function() {
    console.log("Idle");
};

// The reason the preceding code works is that JavaScript engine moves the declaration of showState() function, and all its content, to the beginning of the scope.
// The code is interpreted like this:

 // * JS COMPILER
function showState() {      // moved to the top (function declaration)
    console.log("Ready");
}
var showState;              // moved to the top (variable declaration)
showState();

showState = function() {    // left in place (variable assignment)
    console.log("Idle");
};

// ONLY the function declaration is hoisted, but the function expression is not.
// When a function is assigned to a variable, the rules are the same as for variable hoisting (only the declaration is moved, while the assignment is left in place).

/***********************************************************************************************/
//Next example we’ll see that when we have function declaration versus variable assignment, the last takes priority.
var showStateTwo = function() {
    console.log("Idle");
};

function showStateTwo() {
    console.log("Ready");
}

showStateTwo(); // output: Idle

//This time we call showState() function in the last line of code which change the situation.
//Now we get output “Idle”. Here is how it looks when interpreted by JavaScript engine:

// * JS COMPILER
function showState(){         // moved to the top (function declaration)
    console.log("Ready");
}

var showState;                // moved to the top (variable declaration)

showState = function(){        // left in place (variable assignment)
    console.log("Idle");
};

showState();

/*Things to Remember
    All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.
    Functions are hoisted first, and then variables.
    Function declarations have priority over variable declarations, but not over variable assignments.
*/
//From Ivaylo Gerchev.
//https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/


/*************************************************************************************************
 * CLOSURES
 * ************************************************************************************************/
// A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
// The closure has three scope chains:
// a) it has access to its own scope (variables defined between its curly brackets).
// b) it has access to the outer function’s variables, including the parameter.
// c) it has access to the global variables.

//You create a closure by adding a function inside another function.
function showName (firstName, lastName)
{
    var nameIntro = "Your name is ";

// this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName ();
}

console.log(showName("Michael", "Jackson")); //output: Your name is Michael Jackson


/*************************************************************************************************
 * IIFE (Immediately evoked function expression)
 * ************************************************************************************************/
// Immediately Invoked Function Expression (IIFE).
// A self-invoking function is function which invokes itself
// The main idea is that the anonymous function bellow is being invoked right after it has been defined
(function () {
    //body of the function
}());

//Alternative Syntax
(function () {
    //body
})();

/*************************************************************************************************
 * FUNCTIONS types & HOISTING
 * ************************************************************************************************/

// Compiler moves all functions DECLARATIONS and moves to the top
ex();
function ex () {
    console.log('hi'); // prints hi
}

/***********************************************************************************************/
function ex2 () {
    console.log('hi'); // prints hi
}
ex2();

/***********************************************************************************************/
var ex3 = function () {
    console.log('hi'); // prints hi
};
ex3();

/***********************************************************************************************/
//Because JS Compiler moves variables to the top and set it to undefined, so when ex4() is executed the variable is still undefined
ex4();
var ex4 = function () {
    console.log('hi'); // undefined
};


/*************************************************************************************************
 * 'use strict'
 * ************************************************************************************************/
/*
- Prevents JS silent errors
- Stop JS 'auto-help' on accepting amd correcting mistakes
- It disables features that are confusing or poorly thought out.
- Makes impossible to accidentally create global variables. ex: myVar = foo; // will throw an error cause we didn't declare a 'var myVar = foo;'
- Duplicate property names are a syntax error in strict mode: ex:var o = { p: 1, p: 2 }; // !!! syntax error
- Requires that function parameter names be unique
- You shouldn't use it globally. (It would mean that any code within the same file also runs in strict mode).
 */

// - Use strict mode inside of functions(only within that context), such as:
function doSomething() {
    "use strict";
    // this runs in strict mode
}

function doSomethingElse() {
    // this doesn't run in strict mode
}

// - Wrap your 'use strict' on a IIFE
// - A great aspect of being able to define strict mode within a function is that you can now define complete JavaScript LIBRARIES in a strict manner without affecting outside code.
// - A number of libraries already use the bellow technique (wrapping the whole library with an anonymous self-executing function) and they will be able to take advantage of strict mode very easily.

/***********************************************************************************************/
// Non-strict code...
(function(){
    "use strict";
    // Define your library strictly...
})();

/***********************************************************************************************/
// Non-strict code...
function foo() {
    //do something
}


/*************************************************************************************************
 * 'read only'
 * ************************************************************************************************/
// -If set to true, then the user cannot change the value of the element. However, the value may still be modified by a script.
// -Protects your code against undesired/accidental changes by another person.

/***********************************************************************************************/
'use strict';
var obj = {};
Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false, //can't be written to
    value: 'This var is read only'
});
obj.readOnly = 'I\'m gonna overwrite this var';

console.log(obj.readOnly); //Output: 'This var is read only'


/*************************************************************************************************
 * DELETING PROPERTIES
 * ************************************************************************************************/
// -You cannot delete variables or objects with the 'delete' key word, if you're not on strict mode it might pretend that nothing happened. aka SILENT ERRORS.
'use strict';
var obje = {a:100, b:200};
var aVar = 10;
delete obje.a; //deletes a
delete aVar;
delete obje;
console.log(obje);  //SyntaxError: Delete of an unqualified identifier in strict mode.


/*************************************************************************************************
 * DUPLICATES
 * ************************************************************************************************/
// -If you're not on strict mode it might pretend that nothing happened. aka SILENT ERRORS.
'use strict';
function dup(a,b,a) {
    console.log(a);
}
dup(1,2,3);  //SyntaxError: Duplicate parameter name not allowed in this context


/*************************************************************************************************
 * OCTAL & HEXADECIMALS NUMBERS
 * ************************************************************************************************/
// - Sometimes to make thinks pretty you may encounter:
// - JavaScript will treat the following as Octo or Hex number
// - Use Strict will show the errors

'use strict';
 var v = 120,
     y = 012, //012 is an Octo Number = 10
     z = 0x12; //0x2 is an Hex Number = 18
console.log(v+y+z); //Uncaught SyntaxError: Octal literals are not allowed in strict mode.

//ps: Shorthand for octo notation: 0o12;


/*************************************************************************************************
 * with
 * ************************************************************************************************/
// - Don't use it
// - Been deprecated

/*************************************************************************************************
 * this
 * ************************************************************************************************/
var objec = {
    val: 'Hi there',
    printVal: function() {       //'printVal' needs a way to get a hold of 'val' within the object that it is part of
        console.log(this.val);   //this refers to the OBJECT that it's associated
    }
};
objec.printVal();

//Note:
// -When you're dealing w/ the 'this' key word it is easier to just take a copy of it and use that copy throughout than to try and always figure out what 'this' might reference at his point.
//ex:
var objecT = function() {
    var _this = this;
    console.log(this);
    _this.hello = 'hello';
    _this.greet = function() {
        console.log(_this.hello);
    };
    this.delayedGreeting = function() {
        setTimeout(_this.greet, 1000)
    }
};
var greeter = new objecT();
greeter.delayedGreeting();

/*************************************************************************************************
 * Async Patterns - Callbacks
 * ************************************************************************************************/
// -Use named Functions, hints get rid of anonymous functions. This will help eliminate 'Christmas Tree' code.
// -return your callbacks ex:
return done(err, null); //code snippet


/*************************************************************************************************
 * Async Patterns - Promises
 * ************************************************************************************************/
// -Promises are built in natively in Node 4 but are not native in most browsers in java script.
// -Promises extract that call back function from within the parameters that we're passing to a function, separating our concerns a little bit.
// -Go to promises.js file

/*************************************************************************************************
 * Async Patterns - Final Thoughts
 * ************************************************************************************************/
// -Use Named Functions (eliminates christmas tree code)
// -Promises (help with call backs using the 'then' syntax make code cleaner and easier to read)
// -Babel (transpile es5 to es6)
// -Async/Await (available in es7 eliminates call back hell when writing asynchronous code)


/*************************************************************************************************
 * Production Code - Best Practices
 * ************************************************************************************************/



/*************************************************************************************************
 * SIDE TRACK - JS eval()
 * ************************************************************************************************/
eval (1-3 + 45 * 4);