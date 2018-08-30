/*jshint esversion: 6 */

//for loop
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log("my name is ", name);
    }
  };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

for(var i = 0; i < suspects.length; i++){
 suspectsList.push(CreateSuspectObjects(suspects[i]));
}
console.log(suspectsList);


//http://underscorejs.org/
//_.each
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {log("my name is ${name}");}
  };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

const _ = {};

_.each(suspects, function(name) {
suspectsList.push(CreateSuspectObjects(name));
});
console.log(suspectsList);


//***********
//const _ = {};
_.each = function(list, callback) {
  if (Array.isArray(list)) {
    //loop thorugh the Array
    for (var i = 0; i < list.length; i++) {
      //call the callback with list a item
      callback(list[i], i , list);
    }
  } else {
    //loop trough object
    for(var key in list) {
      callback(list[key], key, list); //get index
    }
  }
};


//use for each
_.each(['Sally', 'Jay', 'Josh', 'Jen'], function(name, i , list) { //list , callback
  if(list[i + 1]) {
    console.log(name, 'is younger than', list[i+1]);
  } else {
    console.log(name, 'is the oldest');
  }
});
