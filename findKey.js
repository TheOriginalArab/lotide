/**
 * This function searches through an object and returns the first key for which the provided callback returns true.
 * @param {Object} object object to search through
 * @param {Function} callback
 * @returns returns key if the callback is true, otherwise returns undefined.
 */
const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
