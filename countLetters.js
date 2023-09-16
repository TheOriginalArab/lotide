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

module.exports = countLetters;
