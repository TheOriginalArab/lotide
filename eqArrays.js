/**
 * This function compares two arrays for equality.
 * @param {array} array1 first array to compare
 * @param {array} array2 second array to compare
 * @returns true only if arrays are equal
 */
const eqArrays = function (array1, array2) {
  //Check if the length of the 2 arrays are equal
  if (array1.length !== array2.length) {
    return false;
  } else {
    //Iterate through each element of the arrays.
    for (let i = 0; i < array1.length; i++) {
      //check if both elements at the current index are arrays themselves.
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        //if so, recursively call eqArrays to compare nested arrays
        if (!eqArrays(array1[i], array2[i])) {
          return false;
        }
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;
