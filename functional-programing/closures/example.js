//A closure gives you access to an OUTER function’s SCOPE from an INNER function
let me = 'Jaco Pastorious';

//let greetMe = () => console.log(`Hello ${me}!`);
//greetMe();

//JS Functions are closures, we can't do this on languages that don't support closures
//We would have to pass me as an argument on greetME()

//Ex:
function greetHim(me) {
    //console.log(`Hello ${me}!`);
}
//greetHim('Stanley Clarke');


//Back to greetMe()
//It does have access to the variable on its outer scope

me = 'Bass Player';
//greetMe();

//Data Privacy
//In JavaScript, closures are the primary mechanism used to enable data privacy.

let numberGenerator = (num) => { //accessible parameter
    // Local “free” variable that ends up within the closure
    let accessVar = 'Hooked!';
    function checkNumber() {
        console.log(`${num}, ${accessVar}`);
    }
    num++;
    return checkNumber;
};

let showClosure = numberGenerator(8);
showClosure();