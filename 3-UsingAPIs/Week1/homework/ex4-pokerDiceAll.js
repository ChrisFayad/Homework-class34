/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dices-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollTheDices()` function to throw five dices in one go, by 
    using `.map()` on the `dices` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Dice 3 rolled off the table.

The provided rollDice() function logs the value of a dice as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dices 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dices that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDice() function available to this file.
// Do not change or remove it.
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const dicePromises = dices.map((dice) => {
    return rollDice(dice);
  });
  return Promise.all(dicePromises);
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));

// ! Do not change or remove the code below
module.exports = rollTheDices;

// My Explanation

/*
  Because inside the pokerDiceRoller.js we can see that rollOnce function
  contain the following code:

  // If the dice rolls of the table we reject the promise (but that
  // doesn't stop the dice from completing it course).
  if (roll > OFF_TABLE_AFTER) {
    if (!offTable) {
      logStamped(`Dice ${dice} continues rolling on the floor...`);
      offTable = true;
    }
    reject(new Error(`Dice ${dice} rolled off the table.\n`));
  }
  
  the reason why it continue to roll because it's still less than
  randomRollsToDo value, as the code below shows:

  // If the dice has more rolls to do, schedule execution of the next roll.
  if (roll < randomRollsToDo) {
    setTimeout(() => rollOnce(roll + 1), rollTime);
  }
  
  Plus, we are using Promise.all which means when one or more of the promises
  get rejected we only get the error of the first promise that got rejected
  which means when the rest or the dices aka other promises continue rolling
  until they reach the randomRollsToDo they might settle and might not but in
  either way we only get one reject message describing the first promise that
  failed.
*/