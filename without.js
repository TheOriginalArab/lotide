/**
 * This function takes in two arrays as input and returns a new array
 * containing elements from 'source' that are not present in 'itemsToRemove'
 * @param {Array} source original array
 * @param {Array} itemsToRemove elements to be removed from original array
 * @returns new array containing original array with elements removed.
 */
const without = function (source, itemsToRemove) {
  const result = [];

  //loop through each item in the 'source' array
  for (const item of source) {
    //if the current item is not in itemToRemove, push into results.
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

module.exports = without;
