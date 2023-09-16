/**
 * It scans the object to find the first key that corresponds to the given value.
 * @param {object} object object taken it to find its key
 * @param {string} value the value of the key we are looking for
 * @returns undefined if no key is found within the object
 */
const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
