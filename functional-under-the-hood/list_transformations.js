//manipulate apis

//Loop through the suspects array
const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

let suspects = game.suspects.map(o => o);
console.log(suspects);
console.log(typeof suspects);  //object

let guilty = suspects[0].name;
console.log(`${guilty} is guilty`);

let [orange, red] = [suspects[0].color, suspects[1].color];
console.log(orange, red);

let [{color: first } , {color: second}] = suspects;
console.log(first, second);


//destructure it and output variables with 'orange', 'red'
let {orange} = {suspects[0].color};
console.log(orange);
