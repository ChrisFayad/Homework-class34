'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-3-roll-an-ace

1. Run the unmodified exercise and observe that it works as advertised. Observe 
   that the dice must be thrown an indeterminate number of times until we get an 
   ACE or until it rolls off the table.
2. Now, rewrite the body of the `rollDiceUntil()` function using async/await and 
   without using recursion. Hint: a `while` loop may come handy.
3. Refactor the function `main()` to use async/await and try/catch.
------------------------------------------------------------------------------*/
// ! Do not change or remove the next two lines
const rollDice = require('../../helpers/pokerDiceRoller');

async function rollDiceUntil(wantedValue) {
  let value = '';
  try {
        while (value !== wantedValue) {
          value = await rollDice();
          console.log('Resolved!', value);
        }
        return value;
  }
  catch(error) {
    throw new Error('Rejected!', error.message);
  }
}

function main() {
  rollDiceUntil('ACE');
}

main();

// ! Do not change or remove the code below
module.exports = rollDiceUntil;
