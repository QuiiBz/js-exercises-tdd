const verify = require('./password');

describe('Passsword verifier', () => {

    it('should be larger than 8 chars', () => {

        const invalid = 'abcdef';

        expect(verify(invalid)).toEqual(false);
    });

    it('should not be null', () => {

        const invalid = null;

        expect(verify(invalid)).toEqual(false);
    });

    it('should have one uppercase letter at least', () => {

        const invalid = 'abcdefgh';

        expect(verify(invalid)).toEqual(false);
    });

    it('should have one lowercase letter at least', () => {

        const invalid = 'ABCDEFGH';

        expect(verify(invalid)).toEqual(false);
    });

    it('should have one number at least', () => {

        const invalid = 'ABCDEFGH';

        expect(verify(invalid)).toEqual(false);
    });

    it('should work if everything is good', () => {

        const valid = 'Abcdefg1';

        expect(verify(valid)).toEqual(true);
    });
});