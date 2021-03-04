const { convertToOldRoman, convertToNewRoman } = require('./roman');

describe('Roman converter', () => {

    it('should convert to old roman', () => {

        expect(convertToOldRoman(1)).toEqual('I');
        expect(convertToOldRoman(3)).toEqual('III');
        expect(convertToOldRoman(7)).toEqual('VII');
        expect(convertToOldRoman(15)).toEqual('XV');
        expect(convertToOldRoman(18)).toEqual('XVIII');
        expect(convertToOldRoman(22)).toEqual('XXII');
    });

    it('should convert to new roman', () => {

        expect(convertToNewRoman(4)).toEqual('IV');
        expect(convertToNewRoman(9)).toEqual('IX');
        expect(convertToNewRoman(14)).toEqual('XIV');
        expect(convertToNewRoman(44)).toEqual('XLIV');
        expect(convertToNewRoman(99)).toEqual('XCIX');
        expect(convertToNewRoman(400)).toEqual('CD');
        expect(convertToNewRoman(944)).toEqual('CMXLIV');
    });
});