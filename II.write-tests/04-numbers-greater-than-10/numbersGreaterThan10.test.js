var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", () => {

    const array = [4, 10, 32, 9, 21];
    const expected = [32, 21];

    expect(largerThanTen(array)).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
