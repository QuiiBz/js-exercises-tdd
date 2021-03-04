const getEvenNumber = require('./get-even-numbers');

test('it should return the even numbers in the array', () => {

    const array = [22, 13, 73, 82, 4];
    const expected = [22, 82, 4];

    expect(getEvenNumber(array)).toEqual(expected);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
