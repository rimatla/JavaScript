/**
 * In this example:
 * - CrunchNumbers() has to run to completion before the next code can run in the browser to be able to update the UI.
 * - See it in action: console.log(step);
 */
const progress = document.getElementById("workerProgress");

//pass into crunchNumbers()
crunchNumbers(function(percent) {
    progress.value = percent;
});

//performs calculations
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
