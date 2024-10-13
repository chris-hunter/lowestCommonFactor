var assert = require('assert');
var commonFactors = require('../app.js')

describe('commonFactors', function () {
    describe('factors', function () {
        it('should return factors of 10 (1, 2, 5, 10)', function () {
            // Setup
            const testNumber = 10;
            const expectedResult = [1, 2, 5, 10];
            // Exercise
            const result = commonFactors.factors(testNumber);
            // Verification
            assert.deepStrictEqual(expectedResult, result);
        });
        it('should return factors of 20 (1, 2, 4, 5, 10, 20)', function () {
            // Setup
            const testNumber = 20;
            const expectedResult = [1, 2, 4, 5, 10, 20];
            // Exercise
            const result = commonFactors.factors(testNumber);
            // Verification
            assert.deepStrictEqual(expectedResult, result);
        })
    });
    describe('commonFactors', function () {
        it('should return common factors of 10 and 20 (1, 2, 5, 10)', function () {
            // Setup
            const numberOne = 10;
            const numberTwo = 20;
            const expectedResult = [1, 2, 5, 10];
            // Exercise
            const result = commonFactors.commonFactors(numberOne, numberTwo);
            // Verification
            assert.deepStrictEqual(result, expectedResult);
        });
    });
    describe('highestCommon', function () {
        it('should return the highest common factor of 10 and 20 (10)', function () {
            // Setup
            const numberOne = 10;
            const numberTwo = 20;
            const expectedResult = 10;
            // Exercise
            const result = commonFactors.highestCommon(numberOne, numberTwo);
            // Verification
            assert.strictEqual(result, expectedResult);
        })
    });
});