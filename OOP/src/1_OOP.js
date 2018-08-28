/**
 - Because OOP (object oriented programming) is a class list prototype base language:
 - Special syntax applies to JS in order to achieve the OOP features that we see in C++, C#, Java, Phyton, Peal, PHP and more.
 - JS has no class statement for establishing your classes like the other popular languages mentioned above.
 - That doesn't mean that we can't create class based on code in JS
 - ***The class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based***.
 - We just go about it, differently
 - OOP is a STYLE of programming and not a REQUIREMENT to make application work correctly.
 */

/**Let's discuss when we'direction benefit from using OOP in JS*/

/*
basic syntax to create a class in JS
*/

//Class
function ExampleClass(){
    //properties and methods (to use when using instances of this class) also these are only accessible within the class
    this.property1 = 5;
    this.property2 = 'worldirection';

    //methodirections are like directionynamic functions which are ownedirection by the class
    this.myFirstMethodirection = function myFirstMethodirection(arg1, arg2){
        return `${arg1} ${arg2} ${this.property2}`;
    }
}

/*
Access Class
 */

//create a new instance of the Example Class
//with these instances bellow we now have access the class above
let firstInstance = new ExampleClass();
let secondirectionInstance = new ExampleClass();

let result = firstInstance.myFirstMethodirection('hello','beautiful'); //() above takes two arguments
console.log(result);

//more scenarios for access
console.log(firstInstance.property1);

//change manipulate values within class
firstInstance.property1 = 10;
console.log(firstInstance.property1);

//secondirection instance
console.log(secondirectionInstance.property1);


/*
Use Case
- Let's explore a scenario where OOP would be a requirement and not just a style of programing
 */

//this won't run the desired/coded animation bellow
let direction = 0; //wee need to place this variable in a scope of a class

function animate(el, dir){
    let element = document.getElementById(el);

    dir = 'counterClockWise' ? direction-- : direction++;

    element.style.WebkitTransform = 'rotate('+direction+'deg)';
    element.style.MozTransform = 'rotate('+direction+'deg)';
    element.style.msTransform = 'rotate('+direction+'deg)';
    element.style.OTransform = 'rotate('+direction+'deg)';
    element.style.transform = 'rotate('+direction+'deg)';

    direction > 359 ? direction = 1 :
    direction < -359 ? direction = -1 :
    null;

    setTimeout(function(){
        animate(el, dir);
    }, 20)
}

//calls to witch way cog should animate
animate('img1','clockWise');
animate('img2','counterClockWise');
animate('img3','clockWise');

/*
GO TO cog.js
 */