const takeUntil = function (array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;

/* const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2); */

/* //Test Case 1: Using a callback to stop when reaching a number greater than 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const results3 = takeUntil(numbers, (item) => item > 5);
assertArraysEqual(results3, [1, 2, 3, 4, 5]);

//Test Case 2: Using a callback to stop when reaching a string length lesser than or equal to 3.
const strings = ["banana", "apple", "duck", "cat", "dog", "grapefruit"];
const results4 = takeUntil(strings, (item) => item.length <= 3);
assertArraysEqual(results4, ["banana", "apple", "duck"]);

//Test Case 3: Using a callback that always returns false.
const alwaysFalse = [1, 2, 3, 4, 5];
const results5 = takeUntil(alwaysFalse, (item) => false);
assertArraysEqual(results5, [1, 2, 3, 4, 5]);
 */
