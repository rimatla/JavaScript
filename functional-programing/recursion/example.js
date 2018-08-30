//Example 1
let countDownFrom = (num) =>  {
    if (num === 0) return; //calls itself until it doesn't
    console.log(num);
    countDownFrom(num -1);
};

countDownFrom(10);

//Example 2
let categories = [
    {id: 'animals', 'parent': null},
    {id: 'mammals', 'parent': 'animals'},
    {id: 'cats', 'parent': 'mammals'},
    {id: 'dogs', 'parent': 'mammals'},
    {id: 'labrador', 'parent': 'dogs'},
    {id: 'puddle', 'parent': 'dogs'},
    {id: 'tabbi', 'parent': 'cats'},
    {id: 'siamese', 'parent': 'cats'},

];

let makeNodeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(c => c.parent === parent) //filter thorough c with the same parents
        .forEach(c =>
            node[c.id] = makeNodeTree(categories, c.id)); //call it recursive (first iteration calls null, then animals, mammals, cats ...
    return node;
};

console.log(
    //make it pretty
    JSON.stringify(
        makeNodeTree(categories, null) //null is the 1st parent of the tree above
    ,null , 2 ) //2 is for indentation
);