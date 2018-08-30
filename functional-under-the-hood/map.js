/*jshint esversion: 6 */
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = weapons.map(i => console.log(`broken ${i}`));

//******* create map
const _ = {};
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

_.map([1,2,3], function(val) {return val + 1;});

//log it
console.log(_.map([1,2,3], function(val) {return val + 1;}));
//1,2,3
