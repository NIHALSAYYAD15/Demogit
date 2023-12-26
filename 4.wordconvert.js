//4.A function that takes an array of words and convert it into an array of each 
//word's length. -- wordConverter(["hello", "world"]) → [5, 5]

function WordConverter(words) {
    return words.map(word => word.length);
    }
    
    // Example array of words
    const arrayOfWords = ["hello", "world"];
    
    const wordLengths = WordConverter(arrayOfWords);
    console.log(wordLengths); // Output: [5, 5]