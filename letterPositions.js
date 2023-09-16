/**
 * This function will return all the indices (zero-based positions) in the string where each character is found.
 * @param {string} sentence takes in a string to count the position of letters
 * @returns object containing the letters of the string and the location of each letter at their respective indices.
 */
const letterPositions = function (sentence) {
  //initialize an empty object to  store results
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index]; //Get the character at the current index.
    //check if the character is not a space
    if (char !== " ") {
      //if the character is not in results, create a new array.
      if (!results[char]) {
        results[char] = [index];
      }
      //if the character is already in results, add index to array.
      else if (results[char]) {
        results[char].push(index);
      }
    }
  }

  return results;
};

module.exports = letterPositions;
