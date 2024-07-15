const arr = [1, 2, 3, 4, 5];

// We want to create a new array where each number is doubled
const doubledNumbers = arr.map(val => val * 2);
const filteredNumber=arr.filter(n=>n<3)

console.log(doubledNumbers);
console.log(filteredNumber);
