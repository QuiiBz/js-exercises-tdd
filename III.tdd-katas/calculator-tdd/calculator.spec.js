const add = require('./calculator');

describe('Sum given numbers', () => {

    it('should return "0" if string is empty', () => {

        const value = '';
        const expected = 0;

        expect(add(value)).toEqual(expected);
    });

    it('should return the given number if only one is given', () => {

        const value = '5';
        const expected = 5;

        expect(add(value)).toEqual(expected);
    });

    it('should sum the given numbers', () => {

        const value = '5,6,9';
        const expected = 20;

        expect(add(value)).toEqual(expected);
    });

    it('should work with "\\n" separator instead of ","', () => {

        const value = '5\\n6\\n9';
        const expected = 20;

        expect(add(value)).toEqual(expected);
    });

    it('should work with a custom delimiter', () => {

        const value = '//;5;6;9';
        const expected = 20;

        expect(add(value)).toEqual(expected);
    });

    it('should throw an error if a number is negative', () => {

        const value = '//;5;-6;9';

        expect(() => add(value)).toThrow(Error);
    });

    it('should ignore numbers higher than "1000"', () => {

        const value = '//;5;6;9;1000';
        const expected = 1020;

        const ignoreValue = '//;5;6;9;1001';
        const ignoreExpected = 20;

        expect(add(value)).toEqual(expected);
        expect(add(ignoreValue)).toEqual(ignoreExpected);
    });
});
