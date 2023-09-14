const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case 2
const numbers = [1];
tail(numbers);
assertEqual(numbers.length, 1);

//Test Case 3
const empty = [];
tail(empty);
assertEqual(tail(empty).length, 0);

//Test Case 4
const numArray = [1, 2, 3];
tail(numArray);
assertEqual(tail(numArray)[0], 2);
assertEqual(tail(numArray)[1], 3);