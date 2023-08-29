/**
 *
 * @param {array} allItems The items to sort through.
 * @param {object} itemsToCount
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
