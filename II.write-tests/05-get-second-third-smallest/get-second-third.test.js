const getSecondThird = require('./get-second-third');

test('it should return the second and third values of array', () => {

    const array = [90, 5, 11, 8, 6];
    const expected = [6, 8];
    const expectedArray = [90, 5, 11, 8, 6];

    expect(getSecondThird(array)).toEqual(expected);
    expect(array).toEqual(expectedArray);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
