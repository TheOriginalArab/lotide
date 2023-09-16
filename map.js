/**
 * The following code was refactored and reviewed by @TheOriginalArab, @Hands-on-robotics, & @ekatie.
 * This function takes in an array and a callback function and outputs a new array created with the callback function.
 * @param {array} array - Input array.
 * @param {callback function} callback - Callback function to apply to array.
 * @returns {array} results - The pushed results of the callback function.
 */
const map = function (array, callback) {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
};

module.exports = map;
