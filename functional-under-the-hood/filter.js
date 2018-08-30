/*jshint esversion: 6 */
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

// filter takes an array and a callback
const _ = {};

//map
_.map = function(list, callback) {
//create an empty array to store
var storage = [];
//loop
for (var i =0; i < list.length; i++) {
  storage.push(callback(list[i], i, list));
}
//retun []
return storage;

};

//filter
_.filter = function(arr, callback) {
  const storage = [];

  //loop thorugh storage array

  //each
  // _.each(arr, function(item, i , list) {
  //   //check if callback returns true
  //   if (callback(item, i, list) ===  true) {
  //     storage.push(item);
  //   }
  // });

 //for loop
  for (let i = 0; i < arr.length; i++) {
    //check if callback returns true
    if (callback(arr[i], i, arr) ===  true) {
      storage.push(arr[i]);
    }
  }
  return storage;
};

//take a list and a callback
_.filter(videoData, function(suspectObject){
  return suspectObject.present;
});

_.filter(videoData, function(suspectObject){
  return suspectObject.present;
});

/*Filter and then map this data
structure to get the names of
the final suspects to send back
to the team:*/
const suspects =  _.filter(videoData, function(suspectObject) {
  return suspectObject.present;
});


const suspectsName = _.map(suspects, suspect => {
  return suspect.name;
});

console.log(suspectsName);

//from
const from = arr => {
  return Array.prototype.slice.call(arr);
};
