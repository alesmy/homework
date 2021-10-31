const sub = require('../mathActions/sub');

describe('difference of two numbers', () => {
    it('function must return difference of two numbers', () => {
        expect(sub(10, 2)).toBe(8);
    });

    it('function without numbers as arguments must return false', () => {
        expect(sub('10', 2)).toBeFalse;
        expect(sub(30, '5')).toBeFalse;
        expect(sub('86', '5')).toBeFalse;
        expect(sub(null, 5)).toBeFalse;
        expect(sub(59, null)).toBeFalse;
        expect(sub(null, null)).toBeFalse;
        expect(sub('underfined', 4)).toBeFalse;
    });
});

