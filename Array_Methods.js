const numbers = [1, 2, 3, 4, 5];

// Array length
console.log(numbers.length); // Output: 5
// Returns the number of elements in the array.

// Array toString()
const fruits = ['apple', 'banana', 'orange'];
const fruitsString = fruits.toString();
console.log(fruitsString); // Output: "apple,banana,orange"
// Converts the array to a string, concatenating all elements with commas.

// Array pop()
const lastNumber = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
console.log(lastNumber); // Output: 5
// Removes the last element from the array and returns it.

// Array push()
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 6]
// Adds one or more elements to the end of the array.

// Array shift()
const firstNumber = numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 6]
console.log(firstNumber); // Output: 1
// Removes the first element from the array and returns it.

// Array unshift()
numbers.unshift(0);
console.log(numbers); // Output: [0, 2, 3, 4, 6]
// Adds one or more elements to the beginning of the array.

// Array join()
const fruitsStringWithDash = fruits.join(' - ');
console.log(fruitsStringWithDash); // Output: "apple - banana - orange"
// Creates a new string by concatenating all elements with a specified separator.

// Array delete()
delete numbers[2];
console.log(numbers); // Output: [0, 2, empty, 4, 6]
// Removes the value of a specific element from the array (leaves an "empty" slot).

// Array concat()
const moreNumbers = [7, 8];
const combined = numbers.concat(moreNumbers);
console.log(combined); // Output: [0, 2, empty, 4, 6, 7, 8]
// Merges two or more arrays, returning a new array.

// Array flat()
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
// Creates a new flattened array from a nested array up to the specified depth.
