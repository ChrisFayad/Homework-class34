'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-dice

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDice()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDice()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDice() {
    return new Promise((resolve, reject) => {
      // Compute a random number of rolls (3-10) that the dice MUST complete
      const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
      console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);

      const rollOnce = (roll) => {
        // Compute a random dice value for the current roll
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(`Dice value is now: ${value}`);

        if (roll > 6) {
          reject(new Error('Oops... Dice rolled off the table.'));
        }
        // Use callback to communicate the final dice value once finished rolling
        if (roll === randomRollsToDo) {
          resolve(value);
        }
        // Schedule the next roll todo until no more rolls to do
        if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
        }
      }
      // Start the initial roll
      rollOnce(1);
    });
}

rollDice()
  .then((value) => {
    console.log(`Success! Dice settled on ${value}.`);
  })
  .catch((err) => {
    console.log(err);
  });

// ! Do not change or remove the code below
module.exports = rollDice;


// My Explanation

/*
  Using the callback with the rollDice function we weren't using return after
  the error callback. Therefore, the code will continue to the second callback.
  However, when we refactored the code using promises. Now, we are returning a
  Promise. Which can either have success value aka resolve or failure value aka
  reject. As a result, we will trigger only one if condition and that's why we
  no longer have the problem described in the guidance.
*/