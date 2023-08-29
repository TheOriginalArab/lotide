const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
*/

/**
 *This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
 * @param {array} string takes in a string to count
 * @returns {object} returns an object containing letter counts
 */
const countLetters = function (string) {
  const letterCounts = {};

  for (const char of string) {
    if (char !== " ") {
      if (!letterCounts[char]) {
        letterCounts[char] = 0;
      }

      letterCounts[char]++;
    }
  }

  return letterCounts;
};

//console.log(countLetters("lighthouse in the house"));

let string = "lighthouse in the house";

let letterCounts = countLetters(string, { l: 1, i: 2, h: 4, z: undefined });

assertEqual(letterCounts["l"], 1);
assertEqual(letterCounts["i"], 2);
assertEqual(letterCounts["h"], 3);
assertEqual(letterCounts["z"], undefined);
