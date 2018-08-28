//http://kangax.github.io/compat-table/es6/

// -Coming Up in ES Next is Async/Await
// -That eliminates the need for call backs 'hell' and promises

// -It is still based off a promise ('syntactic sugar on top of Promises')
// -Promises have been a great solution to the problem of callback hell, but unfortunately they don't solve all of the asynchronous problems. While a great improvement, Promises leave us wanting even more simplification.
// -As your requirements become more complicated, Promises become harder to work with and still end up complicating your code. Especially when chaining promises together ('.then').


'use strict';
function asyncMethod(message, num) {
    //add Promise code
    return new Promise(function(fulfill, reject) {  //fulfill = worked / reject = it didn't
        setTimeout(function() {
            console.log(message + ' ' + num);
            fulfill(num + 1);
        },500)
    });
}

async function main() {
    //async allow us to use key word 'await'
    //await eliminates teh call back. It wait for the asyncMethod to be done before it continues

    //What use to be passed on a callback now it gets passed into this variable
    //What get executed on call back (asyncMethod above) gets assigned to the variable bellow. Then we can use such variable in our next call
    let one = await asyncMethod('async/await, Open DB Connection', 0);
    let two = await asyncMethod('async/await, Find User', one);
    let three = await asyncMethod('async/await, validate User', two);
    let four = await asyncMethod('async/await, do stuff', three);
}
main();


/*************************************************************************************************
 *  The async keyword is used when you're defining a function that contains asynchronous code.
 *  This is an indicator that a Promise is returned from the function and should therefore be treated as asynchronous.
 * ************************************************************************************************/

