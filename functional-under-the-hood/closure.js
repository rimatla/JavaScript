/*jshint esversion: 6 */

const findSomeone = () => {

  const speak = () => {
    console.log(who);
  };

  let who = 'Why hello there, Prof Plum!';

  return speak;
};

const someoneSpeak = findSomeone();
//console.log(someoneSpeak());

/****TIMER****/
// const makeTimer = () => {
//   let elapsed = 0;
//
//   const stopwatch = () => { return elapsed; };
//
//   const increase = () => elapsed++;
//
//   setInterval(increase, 1000);
//
//   return stopwatch;
//
// };
//
// let timer = makeTimer();
// console.log(timer());


/***Console****/
const makeTimer = () => {
  console.log('initialized');
  let elapsed = 0;
  console.log(elapsed);

  const stopwatch = () => {
    console.log('stopwatch');
    return elapsed;
  };

  const increase = () => elapsed++;

  setInterval(increase, 1000);

  return stopwatch;

};

const timer = makeTimer();
console.log(timer());
