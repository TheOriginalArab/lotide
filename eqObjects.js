const eqArrays = require("./eqArrays");
/**
 * This functions compares two objects for equality.
 * @param {Object} object1 first object to compare
 * @param {Object} object2 second object to compare
 * @returns true only if both objects are equal
 */
const eqObjects = function (object1, object2) {
  //Get the keys for both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //check if the number of keys in both objects are the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  //iterate through each key in object1
  for (const key of keys1) {
    //check if the value at the current key is an array in both objects
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //if so, recursively call eqArrays to compare the arrays
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (
      typeof object1[key] === "object" &&
      typeof object2[key] === "object"
    ) {
      /*if the value is an object in both objects, recursively call eqObjects to compare the objects */
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
