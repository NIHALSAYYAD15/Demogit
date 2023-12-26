//1.The Number of words in a sentance, Number of Letters.
//"She sells sea shells on the sea shore"

const prompt = require("prompt-sync")({sigint: true});

// Get the user input
const sentence = prompt("Enter a sentence: ");

// Count the number of words
const numWords = sentence.split(" ").length;

// Count the number of letters
const numLetters = sentence.replace(/\s+/g, "").length;

// Display the results
console.log("The sentence has " + numWords + " words and " + numLetters + " letters.");
