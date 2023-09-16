/**
 * This function takes in an array as input
 * and returns a new array containing all elements except the first one.
 * @param {Array} array array to find tail of
 * @returns new array containing all elements except the first one.
 */
const tail = function (array) {
  if (array.length < 1) {
    return array;
  } else {
    return array.slice(1);
  }
};

module.exports = tail;
