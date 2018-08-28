/**
 - The Prototype Property in JavaScript allows us to add specialised methods and properties to our custom objects and classes.
 - There may be a case when you must specialise the functionality of a class based Object during run time of your application.
 - The Prototype Property allows us to do that
 - It also enables object OOP in JavaScript
 */

//create a example class-based object
function Player(){
    //set properties
    this.name;
    this.hitPoints = 100;

    //custom method
    this.attack = function attack(opponent) {
        opponent.hitPoints -= 10; //decrease it by ten

        //which object is being accessed
        console.log(`${this.name} just hit ${opponent.name}`);
    }
}

//create separate instances
let player1 = new Player();
let player2 = new Player();

//name players
player1.name = 'The Hulk';
player2.name = 'SpiderMan';

//make player1 attack player2
player1.attack(player2);
console.log(`${player2.name} has been hit, ${player2.hitPoints} points left`); //template literal

//add a new 'healing' METHOD to the Player using the Prototype Property
Player.prototype.healing = function healing(targetPlayer){
    targetPlayer.hitPoints += 5; //heal it by 5 points
};

//make player1 heal player2
//access the healing()
player1.healing(player2);
console.log(`${player2.name} has ${player2.hitPoints} hit points left after he's been healed`);
console.log(`${player1.name} has ${player1.hitPoints} hit points left`);

//add an 'energy' PROPERTY to the Player object using Prototype Property
Player.prototype.energy = 200;

//access any instance of the player class
console.log(`${player1.name} has ${player1.energy} of energy left`);

/*
    Using the prototype enables JS OOP
 */