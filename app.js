const commonFactors = {
    factors(testNumber) {
        factorArray = [];
        for (let i = testNumber; i > 0; i--) {
            if (testNumber % i == 0) {
                factorArray.push(i);
            };
        }
        factorArray.sort(function(a, b){return a-b});
        return factorArray;
    },
    commonFactors(numberOne, numberTwo) {
        const factorsOne = this.factors(numberOne);
        const factorsTwo = this.factors(numberTwo);
        const common = [];
        for (let number of factorsOne) {
            if (factorsTwo.includes(number)) {
                common.push(number);
            };
        };
        return common;
    },
    highestCommon(numberOne, numberTwo) {
        const common = this.commonFactors(numberOne, numberTwo);
        var highest = 0;
        for (let number of common) {
            highest = number > highest ? number : highest; 
        };
        return highest;
    },
};

module.exports = commonFactors;