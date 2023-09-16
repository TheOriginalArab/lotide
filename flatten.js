/**
 * This function takes an array containing elements, including nested arrays, and returns a "flattened" version of the array.
 * @param {Array} array array to flatten
 * @returns flattened array
 */
const flatten = function (array) {
  const flattened = [];

  //iterate through each in the input 'array'.
  for (const item of array) {
    if (Array.isArray(item)) {
      //if the item is an array, iterate through its elements.
      for (let i = 0; i < item.length; i++) {
        flattened.push(item[i]);
      }
    } else {
      flattened.push(item);
    }
  }

  return flattened;
};
module.exports = flatten;
