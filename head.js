/**
 * This function takes an array input and returns the first element of that array.
 * @param {Array} array
 * @returns first element of the array
 */
const head = function (array) {
  if (array.length !== 0) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;
