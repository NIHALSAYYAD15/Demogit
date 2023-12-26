//2.Find whether a Array contains a specific integer. -- 4 -- have a static array of 20 numbers

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces (e.g., 1 2 3 4 5): ", (input) => {
  // Split the user input into an array of numbers
  const userArray = input.split(" ").map(Number);

  rl.question("Enter the integer to check for: ", (targetNumber) => {
    // Use the `includes` method to check if the number is in the user-defined array
    if (userArray.includes(Number(targetNumber))) {
      console.log(`${targetNumber} is in the array.`);
    } else {
      console.log(`${targetNumber} is not in the array.`);
    }

    rl.close();
  });
});
