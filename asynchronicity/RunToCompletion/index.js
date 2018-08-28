//In the code bellow, JS Run to completion nature will clog the process until code is executed.
//Consider Asynchronous Seams/Cooperate Concurrency/Little Programs

const btn = document.getElementById("button");

btn.addEventListener("click", function() {
    /**
     * (this block of code has to wait in the queue...)
     */
    // modify the page
    document.body.style.backgroundColor = "red";
    var p = document.createElement("p");
    p.innerText = "let's add some text to the page";
    document.body.appendChild(p);
    /**
     *  (...until this one is executed so it can then be executed as well)
    */
    // simulate blocking / long running operation
    const start = Date.now();
    const delaySeconds = 10;
    while (Date.now() < start + delaySeconds * 1000) {}

});



//Run to Completion, single threaded reality - Block Scope
console.log('1');

setTimeout(function() {

    console.log('2');

    setTimeout(function() {

        console.log('3');

    }, 0);

    console.log('4');

}, 0);

console.log('5');

