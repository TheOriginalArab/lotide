const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const flatten = require("./flatten");
const map = require("./map");
const letterPositions = require("./letterPositions");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const without = require("./without");
const takeUntil = require("./takeUntil");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  flatten: flatten,
  map: map,
  letterPositions: letterPositions,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  without: without,
  takeUntil: takeUntil,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
};
