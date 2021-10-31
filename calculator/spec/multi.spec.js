const multi = require('../mathActions/multi');

describe('multi of two numbers', () => {
    it('function must return result of multiplication of two numbers', () => {
        expect(multi(10, 2)).toBe(20);
    });

    it('function without numbers as arguments must return false', () => {
        expect(multi('10', 2)).toBeFalse;
        expect(multi(30, '5')).toBeFalse;
        expect(multi('86', '5')).toBeFalse;
        expect(multi(null, 5)).toBeFalse;
        expect(multi(59, null)).toBeFalse;
        expect(multi(null, null)).toBeFalse;
        expect(multi('underfined', 4)).toBeFalse;
    });
});

