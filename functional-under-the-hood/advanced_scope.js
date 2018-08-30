/*jshint esversion: 6 */

const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = () => {
    //console.log(x);
  };
  alerter();
};
myAlert();

//new clue
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

const didGreen = newClue('Green');
console.log(didGreen);
