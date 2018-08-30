// a simplified way to define variables and take them outside of a object or array
 var obj = {first: 'Dan', last: 'Coelho'};
 var logMe = [obj.first, obj.last];
 //console.log(logMe);


 // 1. Create an object that looks like this:
 //
 // {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}
 //
 // 2. Extract out the weapon and location using destructuring

 //one way
 let game = {};
 game.name = 'Rusty';
 game.room = 'Kitchen';
 game.weapon = 'candlestick';

 console.log(game);
 let {room, weapon} = game;

 console.log(room, weapon, name);

 //another way
 let {name, room, weapon} = {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"};
 console.log(room, weapon, name);
