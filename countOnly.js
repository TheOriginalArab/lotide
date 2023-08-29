/**
 * Function checks the equality of two variables and console logs the return
 * result as a Pass or Fail
 * @param {variable} actual is compared with expected
 * @param {variable} expected is compared with actual
 * @returns {boolean} returns Pass or Fail
 */
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

/**
 * Takes in a collection of items and return counts for a specific subset of those items.
 * It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.
 * @param {array} allItems an array of strings that we need to look through.
 * @param {object} itemsToCount an object specifying what to count.
 * @returns {object} Items counted.
 */
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }

    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;
  }
  return results;
};
