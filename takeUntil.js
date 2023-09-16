/**
 * This function takes an array and a callback function as input.
 * @param {Array} array
 * @param {Function} callback
 * @returns a new array that includes elements from the original array
 * until the callback returns a truthy value
 */
const takeUntil = function (array, callback) {
  //initialize an empty array to store the results.
  const results = [];

  //iterate through each item in array
  for (const item of array) {
    /* if callback returns truthy value, return results collected so far
    otherwise, add the current item to the results array. */
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;
