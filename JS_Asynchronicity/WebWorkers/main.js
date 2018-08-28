/**
 * Main App
 */

//retrieve html id
const progressBar = document.getElementById("workerProgress");

//Web Worker from crunchNumbers.js
let worker = new Worker('crunchNumbers.js');

//listen for messages, when Worker sends a message this function gets executed
worker.onmessage = function(bananaSandwich) { //receive message update the UI
    //const progress
    progressBar.value = bananaSandwich.data;
};