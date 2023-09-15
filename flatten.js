const flatten = function (array) {
  const flattened = [];

  for (const item of array) {
    if (Array.isArray(item)) {
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
