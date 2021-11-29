'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollTheDices()` by using `.map()` on the `dices` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

async function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const dicePromises = dices.map((dice) => {
    return rollDice(dice);
  });
  try {
    const raceValue = await Promise.race(dicePromises);
    console.log('Resolved!', raceValue);
    return raceValue;
  }
  catch(error) {
    throw new Error('Rejected!', error.message);
  }
  
}

// Refactor this function to use async/await and try/catch
function main() {
  rollTheDices();
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;

// My Explanation

/*
  Because we are using Promise.race() which return & resolve when the first
  Promise of the array Promises resolve but the code still run for the other
  promises, we just don't care about if they resolved or not.
*/