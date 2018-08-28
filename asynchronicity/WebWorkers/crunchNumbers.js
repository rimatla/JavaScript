/**
 - A Web Worker will execute the crunchNumbers() which is now on a separate js file crunchNumbers.js

 - We put the intensive work in here ('behind the scenes'), then we send updates into our primarily application main.js.

 - Dedicated WebWorker can't update the UI because it doesn't have access to the DOM.

 - See it in action: console.log(step);
 */

//call crunchNumbers() then postMessage function is used to send messages to the primary JS engine that controls the UI of the browser tab (main.js).

//The postMessage() method of the Worker interface sends a message to the worker's inner scope
crunchNumbers(postMessage); //send message to main.js
console.log(postMessage);

function crunchNumbers(progressCallback) {
    //iterate through loop 11x
    for (let step = 0; step <= 10; step++) {
        progressCallback(step * 10);
        console.log(step);

        const start = Date.now();
        //block for a second
        const seconds = 1;
        const waitUntil = start + seconds * 1000;
        while (Date.now() < waitUntil) {}
    }
}
