let orders = [
  {amount: 300},
  {amount: 200},
  {amount: 120},
  {amount: 30},
];

/*
started at 0 add me now to { amount: 300 }
started at 300 add me now to { amount: 200 }
started at 500 add me now to { amount: 120 }
started at 620 add me now to { amount: 30 }
650

 */

//sum all the amounts

//for loop
/*
let totalAmount = 0;
for( let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

console.log(totalAmount);
*/

//Reduce

//reduce will receive the action items as 2nd argument
let totalAmount = orders.reduce((sum, order) => { //(accumulator, current value)
  console.log('started at', sum, 'add me now to',order);
  return sum + order.amount;
}, 0);//start sum at 0 and iterate

console.log(totalAmount);

let teams = ['Flamengo', 'Fluminense', 'Vasco', 'Palmeiras', 'Bulls', 'Yankees', 'Gremio', 'Cavaliers', 'Arsenal', 'Lakers', 'Celtic', 'Real Madrid', 'Inter'];
let getFirstAlphabeticallly = teams.reduce((current, next)=>{
  console.log('comparing', current, 'to', next);
  return (current < next) ? current : next;
},'\u0434'); //mundane unicode as initial value

console.log(getFirstAlphabeticallly);
/*
comparing д to Flamengo
comparing Flamengo to Fluminense
comparing Flamengo to Vasco
comparing Flamengo to Palmeiras
comparing Flamengo to Bulls
comparing Bulls to Yankees
comparing Bulls to Gremio
comparing Bulls to Cavaliers
comparing Bulls to Arsenal
comparing Arsenal to Lakers
comparing Arsenal to Celtic
comparing Arsenal to Real Madrid
comparing Arsenal to Inter
Arsenal

 */