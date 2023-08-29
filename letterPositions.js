const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/**
 * This function will return all the indices (zero-based positions) in the string where each character is found.
 * @param {string} sentence takes in a string to count the position of letters
 * @returns object containing the letters of the string and the location of each letter at their respective indices.
 */
const letterPositions = function (sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index];
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [index];
      } else if (results[char]) {
        results[char].push(index);
      }
    }
  }

  return results;
};

// test code
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
