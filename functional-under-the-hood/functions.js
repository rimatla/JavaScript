/*jshint esversion: 6 */

// arrow functions do not have their own value for 'this', they inherit 'this' from their parent scope

//every time we call a function, a brand new scope is initialized/reseted

/********************/
function foo() {
  var a = 1;

  function bar() {
      a = 2;
    //console.log(a); //2
  }
  bar();
  console.log(a);//2
}

foo();

//console.log(a); //a is not defined

/********************/
function foo() {
  var a = 1;

 //a function has access to its own local scope variables
  function bar() {
      var a = 2;
    //console.log(a); //2
  }
  bar();
  console.log(a);//1
}

foo();

//console.log(a); //a is not defined
