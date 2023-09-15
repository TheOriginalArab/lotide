const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("should return ['With', 'Yoyo', 'String'] for ['Tricks', 'With', 'Yoyo', 'String']", () => {
    assert.deepEqual(tail(["Tricks", "With", "Yoyo", "String"]), [
      "With",
      "Yoyo",
      "String",
    ]);
  });

  it("should return [8] for [7, 8]", () => {
    assert.deepEqual(tail([7, 8]), [8]);
  });
});
