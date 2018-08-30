//Combine two sorted arrays into a single sorted array.
arrayOne = [1,2,3,4,5,6,];
arrayTwo = [5,6,7,8,9,10,12,14,15,13];

//method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
combinedArray = arrayOne.concat(arrayTwo);
let  removeDuplicate = [...new Set(combinedArray)];

//console.log(combinedArray);
//console.log(removeDuplicate);


// Combine both arrays and without repeating items
let arrayUnique = array => {
    let arr = array.concat();
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            arr[i] === arr[j] ? arr.splice(j--, 1) : false;
            //The splice() method changes the contents of an array by removing existing elements
            //and/or adding new elements.
        }
    }
    return arr;
};

let array1 = ['apple','cherry', 'grape', 'banana' ];
let array2 = ['grape','orange', 'pineapple','cherry'];
let array3 = arrayUnique(array1.concat(array2));

//console.log(array3);

//One line solution as a segue to LiraNuna's solution:
let namesOne = ["Vijendra","Singh"];
let namesTwo = ["Singh", "Shakya"];

// Merges both arrays
let namesThree = namesOne.concat(namesTwo);
//Removes duplicates
//let removeDuplicate = [...new Set(namesThree)];

//console.log(removeDuplicate);

let names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
//The Set object lets you store unique values of any type, whether primitive values or object references.

let dup = [...new Set(names)];
console.log(dup);