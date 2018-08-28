let repetitions = 0;
const totalRepetitions = 1000;
const delay = 0;

let totalActualDelay = 0;

testDelay();

function testDelay() {

    if (repetitions++ > totalRepetitions) {
        const actualDelay = totalActualDelay / totalRepetitions;
        console.log(`Requested Delay: ${delay}, Actual Average Delay: ${actualDelay}`);
        return;
    }

    let start = new Date();
    //=> (is a function)
    setTimeout(() => {
        totalActualDelay += new Date() - start;
        testDelay()
    }, delay)
}

//testDelay() is being passed on both functions aka 'little programs';