const sum = require('../mathActions/sum');

describe('sum of two numbers', () => {
    it('function must return sum of two numbers', () => {
        expect(sum(10, 2)).toBe(12);
    });

    it('function without numbers as arguments must return false', () => {
        expect(sum('10', 2)).toBeFalse;
        expect(sum(30, '5')).toBeFalse;
        expect(sum('86', '5')).toBeFalse;
        expect(sum(null, 5)).toBeFalse;
        expect(sum(59, null)).toBeFalse;
        expect(sum(null, null)).toBeFalse;
        expect(sum('underfined', 4)).toBeFalse;
    });
});

