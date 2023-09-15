const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

/* //Test Case 1: Finding the first value with a truthy value (string value).
const fruits = {
  apple: "red",
  banana: "yellow",
  grape: "purple",
  lemon: "yellow",
};

const result = findKey(fruits, (color) => color === "yellow");
assertEqual(result, "banana");

//Test Case 2: Finding the first key with a truthy value (array value).
const students = {
  alice: [90, 85, 92],
  vic: [45, 21, 3],
  dom: [96, 97, 100],
};

const result1 = findKey(students, (socres) => socres.includes(96));
assertEqual(result1, "dom");

//Test Case 3: No key found with a truthy value.
const empty = {};
const result2 = findKey(empty, (value) => value === "not found");
assertEqual(result2, undefined); */
