
/*
 Use Case
 - Let's explore a scenario where OOP would be a requirement and not just a style of programing
 */

//this WILL run the desired/coded animation bellow
function RotationAnimation(){
    //property of the class
   this.direction = 0; //we need to place this variable in a scope of a class

    this.animate = function animate(el, dir){

        let element = document.getElementById(el);
        let me = this;

        //if it is counter clock wise go one way else go the other way
        if(dir == 'ccw') {
            this.direction--;
        }
        else {
            this.direction++;
        }

        element.style.WebkitTransform = 'rotate(' + this.direction + 'deg)';
        element.style.MozTransform = 'rotate(' + this.direction + 'deg)';
        element.style.msTransform = 'rotate(' + this.direction + 'deg)';
        element.style.OTransform = 'rotate(' + this.direction + 'deg)';
        element.style.transform = 'rotate(' + this.direction + 'deg)';

        if(this.direction > 359) {
            this.direction = 1;
        }
        else if(this.direction < -359) {
            this.direction = -1;
        }

        setTimeout(function (){
            me.animate(el, dir);
        }, 3)
    }
}

let img1RotateObj = new RotationAnimation();
let img2RotateObj = new RotationAnimation();
let img3RotateObj = new RotationAnimation();

//calls to witch way cog should animate as instances of the class
img1RotateObj.animate('img1','cw');
img2RotateObj.animate('img2','ccw'); //counter clock wise
img3RotateObj.animate('img3','cw');

/*
There are occasions where you'll have conflicts/collisions in the values that you're passing through a function if the function is handling simultaneous data
To avoid that you can package everything in a class file
 */

/**
 Pros:
 - Makes your code modular and easy to share. That's how you'd build modules and passing in through instances (becoming code magic)
 - Avoids Value Collisions
 - Makes your functions reusable

 Cons:
 - It takes more processing power from the server to able to call a class file into a script and code against it
 - If you do not require it, then there's no good to use it. Don't overbuilt your app if you don't need it
 */