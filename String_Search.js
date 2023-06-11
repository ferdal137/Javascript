const str = 'Hello, world!';

// String indexOf(): Returns the index of the first occurrence of a specified substring
const index = str.indexOf('world');
console.log(index); // Output: 7

// String lastIndexOf(): Returns the index of the last occurrence of a specified substring
const lastIndex = str.lastIndexOf('o');
console.log(lastIndex); // Output: 8

// String search(): Searches for a specified substring and returns the index of the first match
const searchIndex = str.search('world');
console.log(searchIndex); // Output: 7

// String match(): Extracts the matches of a specified pattern and returns them as an array
const regex = /[A-Za-z]/g;
const matches = str.match(regex);
console.log(matches); // Output: ['H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// String matchAll(): Returns an iterator of all matches of a specified pattern
const matchAllRegex = /[A-Za-z]/g;
const matchAllIterator = str.matchAll(matchAllRegex);
for (const match of matchAllIterator) {
  console.log(match[0]);
}
// Output:
// H
// e
// l
// l
// o
// w
// o
// r
// l
// d

// String includes(): Checks if a specified substring is present in the string
const includesCheck = str.includes('world');
console.log(includesCheck); // Output: true

// String startsWith(): Checks if the string starts with a specified substring
const startsWithCheck = str.startsWith('Hello');
console.log(startsWithCheck); // Output: true

// String endsWith(): Checks if the string ends with a specified substring
const endsWithCheck = str.endsWith('world!');
console.log(endsWithCheck); // Output: true
