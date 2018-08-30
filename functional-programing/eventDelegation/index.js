//Event delegation allows you to avoid adding event listeners to specific nodes;
// instead, the event listener is added to one parent.

//fire an event every time a child is clicked
//Add a separate handler on each child? No!

/*EXAMPLE 1*/
//add event listener to parent
document.getElementById('parent-node').addEventListener('click', event => {
    //was it a child element? If so, process it
    event.target && event.target.nodeName === 'LI' ? console.log(`Child #${event.target.id.replace('child-','')}, was clicked`) : false;
});

/*EXAMPLE 2*/
//Drill from the main parent DIV all the way down to the a tags children
//Get the parent DIV, add click listener...
document.getElementById('parentDiv').addEventListener('click', e => {
   e.target && e.target.nodeName === 'A' ? console.log(`Anchor element ${e.target.id} clicked!`) : false;
});