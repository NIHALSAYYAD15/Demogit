const originalList = ["Job", "Mary", "ABDULLAH", "Sharma", 56, 32, 45];

const result = originalList
  .filter(item => typeof item === 'string')
  .map(item => item.replace(/\d+/g, '').length);

console.log(result);
