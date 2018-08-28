/************************************************************************************************
 * NODE JS
 * NPM Settings
 *************************************************************************************************/
//too lazy to enter all the info when you run npm init?
npm init --yes

//With everything changing all the time, it might be a good idea to set some specifics in your package.json (constraints around your code)

//package.json snippet
{
    "engines": {
    "node": "4.2.1"
    },
    "dependecies": {
    "express":"^4.13.4"
    }

}

//tired of typing --save all the time?
npm config set save=true
//Now just run npm install 'your_package_name'

//don't like the ^ ?   (cause it doesn't specify which package is specially being used, ^ is a wild card, but packages changes substantially from time to time and that could throw errors in your code.
npm config set save-exact=true

run npm install 'your_package_name'
//check out how your dependencies would be saved now

//package.json snippet
{
    "engines": {
    "node": "4.2.1"
},
    "dependecies": {
    "express":"4.13.4"
}

}

/************************************************************************************************
 * Environments
 * Environmental Variables
 * Node Foreman
 *************************************************************************************************/
//your code will behave diff between dev, qa and/or prod

//you've seen that in the past:
console.log('Express listening on port:' + process.env.PORT);

//amidst many other things Node Foreman (https://github.com/strongloop/node-foreman) can work w/ environmental variables
npm install -g foreman

//package.json snippet
"start": "node app.js"

npm start //port undefined
nf start //port 500 is set by default

//got to .env file
nf start //'Express listening on port: 9000'

/************************************************************************************************
 * Cross Platform Concerns
 * Gotchas
 *************************************************************************************************/
//Node.js is truly ross platform (mac, linux, windows)

// go to myObject.js

var myObject = require('./myObject');
console.log(myObject.hi);

//if you were to rename your js file to myobject.js (the code above would still run on mac/windows but not on linux)

//Make sure everything is cross platform able
//consider naming you files lower case and w/ -
//ex:
//my-object.js

//At least just ne aware!

/************************************************************************************************
 * Keep it Simple!
 * Q-Unit, Backbone, Jasmine, Uglify, Jade, React, Material-Design, Ember, Grunt, Bower
 * Chai, NPM, Zombie, Casper, Cucumber, Gulp, Handlebars, Underscore, Angular, Mocha, Flux
 * Mustache, Lo-dash, Browserify
 *************************************************************************************************/

//There's A LOT out there (group of tools)

//TOOLS ARE FOR SOLVING PROBLEMS...NOT CREATING THEM (Jonathan Mills)
//If you have a prob that can be used by using Grunt, use Grunt, if Bower, then use Bower.

//Don't confuse getting things done:
//Right, Best & Simple Way vs Fancy Magic
