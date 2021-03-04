const largestNumber = require('./largest-number');

test('it should return the largest number in the array', () => {

    const array = [3, 21, 88, 4, 36];
    const expected = 88;
    const expectedArray = [3, 21, 88, 4, 36];

    expect(largestNumber(array)).toEqual(expected);
    expect(array).toEqual(expectedArray);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
