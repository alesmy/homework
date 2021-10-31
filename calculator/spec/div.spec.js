const div = require('../mathActions/div');

describe('div of two numbers', () => {
    it('function must return result of division of two numbers', () => {
        expect(div(10, 2)).toBe(5);
    });

    it('function without numbers as arguments must return false', () => {
        expect(div('10', 2)).toBeFalse;
        expect(div(30, '5')).toBeFalse;
        expect(div('86', '5')).toBeFalse;
        expect(div(null, 5)).toBeFalse;
        expect(div(59, null)).toBeFalse;
        expect(div(null, null)).toBeFalse;
        expect(div('underfined', 4)).toBeFalse;
        expect(div(28, 0)).toBeFalse;
    });
});

