/**
 * This function takes in an array as input and returns the middle-most
 * element(s) of the array.
 * The output array depends on the length of the input array
 * @param {Array} array array to iterate through
 * @returns middle-most element(s) of input array
 */
const middle = function (array) {
  //get length of the input array and calculate middle index.
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  /*
    if the array length is 0, 1 or 2, return empty array.
    if the length is odd, return the middle element
    if the length is even, return the two middle elements
  */
  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;
