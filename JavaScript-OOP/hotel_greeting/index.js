//codereview.stackexchange.com

/*

The whole point of OOP is to encapsulate functionality into objects,
such that each object has a specific set of properties and behavior attached to it.
The provided snippet can be modified to have a Greeting class that has a handleSubmit method with
the properties described inside the arrow function of the AJAX callback. However, based on the layout,
you'd probably only have an instance, essentially making OOP useless here.

You perform an AJAX request which fetches all the data for each greeting.
You then map the data into separate arrays that each have specific per-guest data.
If you really want to use classes, this can be refactored into something like:

*/
class HotelGuest {
    constructor(a, b, c) {
        this.firstName = a;
        this.hotelName = b;
        this.roomNum = c;
    }

    // Add ${time} as necessary, because I only see it once and do not know its purpose
    get greeting(){
        return this.firstName + " and welcome to " + this.hotelName +
            " your " + this.roomNum + " is now ready for you. Enjoy your stay, let us know if you need anything.";
    }
}

var guestsInfo = [];

$(function(){
    $.ajax({
        type: "GET",
        url: "/data",

        success: data => {
        data.guests.forEach((guest, i) => guestsInfo.push(new HotelGuest(guest.firstName, data.hotels[i].company, guest.reservation.roomNumber)));
},

    error: err => console.log(err)
});
});

/*
All of the guests and important info can be found into guestsInfo.
Each element follows the layout of the HotelGuest class. To get a guest's greeting,
just access the .greeting property. It'll change based on the guest's data.

For more information on classes and their syntax in ES6,
visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

*/

/*
NODE - JS LOAD MULTIPLE JSON FILES (ps: needs to be an absolute path ie: http//....
const rp = require("request-promise");

Promise.all([rp({uri: url1, json: true}), rp({uri: url2, json: true})]).then(function([hotels, guests]) {
   console.log(hotels, guests);
   res.json({hotels, guests});
}).catch(function(err) {
   console.log(err);
});
 */

/*
EX: 2
Why do you use request to get the data? Why don't you use the filesystem module from Node.js (fs)
to get the data? When you call rp(), you should pass an absolute URI and not a local path.
To use it in your code, you need to "promisify" the readFile function:

let readFileAsAPromise = function(filename){
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, (data, err) => {
      if(err) reject(err);
      resolve(data)
    })
  })
}

You can then you Promise.all.
*/