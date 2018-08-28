/**
 - Inheritance is when a Object inherit all the properties methods of its parent Object. In order to become a specialized version of the parent Object.
 - In JS we use a prototype property to establish sub-classes that will inherent the characteristics of their main parent Class.
 - It is very easy to domain.
 - So this results in a specialized sub-class that can retain its own property and methods as well as inherit all of the properties methods of the parent class.
 **/

//establish a parent class
function ParentClass(){
    //establish properties and methods
    this.parent_property1 = 'Hola Papi';
    this.parentMethod1 = function parentMethod1(arg1, arg2){ //pass in any dynamic arguments
        return arg1 + 'Parent method 1 return data ...';

    }
}

//establish a child (sub) class
function ChildClass(){
    //establish properties and methods
    this.child_property1 = 'Adios Chico';
    this.childMethod1 = function childMethod1(arg1, arg2){ //pass in any dynamic arguments
        return arg1 + 'Child method 1 return data ...';
    }
}

/*
 Make the child class inherit all of the parent class characteristics
 by using the prototype property
 */

ChildClass.prototype = new ParentClass(); //this allows the child class to inherit all of the properties and methods of the parent class

//create a new instance of child class
//Now bananaSandwich will have it, and carry it all
let bananaSandwich = new ChildClass();

//check if bananaSandwich is an instance of BOTH objects
//this should return true or false
console.log(bananaSandwich instanceof  ParentClass);
console.log(bananaSandwich instanceof  ChildClass);


//they are both true, that means it 'bananaSandwich' is both a instance of child class and parent class,
//also it can access all the properties and methods of both classes. In normal situations it wouldn't be able to


/*
check for access the instances methods and properties within both classes
 */

//methods
console.log(bananaSandwich.parentMethod1('RESULT: ')); //send in dynamic argument to the parent class
console.log(bananaSandwich.childMethod1('RESULT: '));

//properties
console.log(bananaSandwich.parent_property1);
console.log(bananaSandwich.child_property1);

/*
That means that Banana Sandwich can inherit of the properties and methods within both classes. Because we made child class inherit all of it from the parent class
 */


//Override parentMethod1 in the ChildClass
//use prototype to add the parentMethod1 to child class and override this method in the parent class
ChildClass.prototype.parentMethod1 = function parentMethod1(arg1){
    return arg1 + 'I have have overridden Parent Method 1 ...';
};

console.log(bananaSandwich.parentMethod1('RESULT: '));

/*
Note: If you'll going to use OOP, Unless you the Child Class to override the properties of its parent: Make sure you use unique names ie: parent_property1 child_property1
*/