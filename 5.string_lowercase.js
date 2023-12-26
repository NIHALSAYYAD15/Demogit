const originalList = ["Job", "Mary", "ABDULLAH", "Sharma", 56, 32, 45];

// Filter the list to keep only lowercase strings
const filteredList = originalList
  .filter(item => typeof item === 'string')
  .map(item => item.toLowerCase());

console.log(filteredList);
