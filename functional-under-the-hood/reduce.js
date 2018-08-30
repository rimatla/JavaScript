/*jshint esversion: 6 */
const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

//*****************************************************
//loops and always returns one value
//_.reduce(collection, [iterate=current index], acumulator)

//implement Reduce under the hood
const _ = {};
_.reduce = function(list, cb, initial) {

let acumm = initial;
//loop through list
for (let i =0; i < list.length; i++) {
  if (i === 0 && acumm === undefined) { //double negation (undefined)
    acumm = list[0];
    i++;
  } else {
    //call cb w/ arr[i]
    acumm = cb(list[i], acumm);
  }

}
//return result
return acumm;
};

let reducing = _.reduce([1,2,3], (v, sum) => v + sum, 0); //initial value
console.log(reducing);















//*****************************************************
const notInRoom = (suspect, memo) => {
  //return all falses
  const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
    if (room === false) memo.push(room);
    return memo;
  },[]);

  return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom);

//lodash (look it up)
_.intersection(...notInRooms);





// _.reduce(newDevelopment, notInRoom,[]);

//Return the room that no one claims to be in
// let notIn = _.reduce(newDevelopment.rooms, (o, acumm) => {
//   if (acumm === false) memo.push(acumm);
//   return acumm;
// }, []);
// console.log(notInRoom);
