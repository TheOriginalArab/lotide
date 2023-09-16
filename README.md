# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @peterhashem/lotide`

**Require it:**

`const _ = require('@peterhashem/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(head)`: This function takes an array input and returns the first element of that array.

- `function2(tail)`: This function takes in an array as input and returns a new array containing all elements except the first one.

- `function3(middle)`: This function takes in an array as input and returns the middle-most element(s) of the array. The output array depends on the length of the input array

- `function4(flatten)`: This function takes an array containing elements, including nested arrays, and returns a "flattened" version of the array.

- `function5(map)`: This function takes in an array and a callback function and outputs a new array created with the callback function.

- `function6(letterPositions)`: This function will return all the indices (zero-based positions) in the string where each character is found.

- `function7(findKey)`: This function searches through an object and returns the first key for which the provided callback returns true.

- `function8(findKeyByValue)`: This function scans the object to find the first key that corresponds to the given value.

- `function9(without)`:This function takes in two arrays as input and returns a new array containing elements from 'source' that are not present in 'itemsToRemove'.

- `function10(takeUntil)`: This function takes an array and a callback function as input. Returns a new array that includes elements from the original array until the callback returns a truthy value

- `function11(countLetters)`: This function should take in a sentence (as a string) and then returns a count of each of the letters in that sentence.

- `function12(countOnly)`: Takes in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.

- `function13(eqObjects)`: This functions compares two objects for equality.

- `function14(eqArrays)`: This function compares two arrays for equality.
