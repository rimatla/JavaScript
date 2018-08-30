
//destructuring ==== DRY
//unpack values from arrays, or properties from objects, into distinct variables.

let arr = ['foo', 'bar', 'baz'];
//previous to ES6
let foo = arr[0];
let bar = arr[1];
let baz = arr[2];
console.log(foo, bar, baz); //foo, bar, baz

//destructuring
//unpack values from arrays, or properties from objects, into distinct variables.
let [foo, bar, baz] = arr;
console.log(foo, bar, baz); //foo, bar, baz

//object
let o = {
    foo: 'Hello',
    bar: 'Wild',
    baz: 'World'
};

//previous to ES6
let foo = o.foo;
let bar = o.bar;
let baz = o.baz;

//destructuring
let {foo, bar, baz} = o;
console.log('Oh hey,',foo, bar, baz);
