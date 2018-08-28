/*************************************************************************************************
 * Async Patterns - Promises
 * ************************************************************************************************/
// -Promises are built in natively in Node 4 but are not native in most browsers in java script.
// -Promises extract that call back function from within the parameters that we're passing to a function, separating our concerns a little bit.
// -A promise represents the result of an asynchronous operation
// -It comes into play when working w/ async methods

//replicate an async method
function asyncMEthod(message, callBack) {
    setTimeout(function() {
        console.log(message);
        callBack();
    },500)
}

//Here's the 'Christmas Tree Code' sample
asyncMEthod('Open DB Connection', function() {
    asyncMEthod('Find User', function() {
        asyncMEthod('validate User', function() {
            asyncMEthod('do stuff', function(){})
        })
    })
});

/***********************************************************************************************/
//Let's fix this using Promises
function asyncMethod(message) {
    //add Promise code
    return new Promise(function(fulfill, reject) {  //fulfill = worked / reject = it didn't
        setTimeout(function() {
            console.log(message);
            fulfill();
        },500)
    });
}

function findUser() {
   return asyncMethod('Promise, Find User')
}

function validateUser() {
    return asyncMethod('Promise, validate User')
}

function doStuff () {
    return asyncMethod('Promise, do stuff')
}

//A Promise makes our functions 'then'able'
asyncMethod('Promise, Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function(){});


