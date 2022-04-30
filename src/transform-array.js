const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr))
        throw new Error(`'arr' parameter must be an instance of the Array!`);
    const tempArr = [...arr],
        result = [];
    for (let i = 0; i < tempArr.length; i++) {
        switch (tempArr[i]) {
            case `--discard-next`:
                if (tempArr[i + 1])
                    tempArr[i + 1] = undefined;
                break;
            case `--discard-prev`:
                if (tempArr[i - 1])
                    result.pop();
                break;
            case `--double-next`:
                if (tempArr[i + 1])
                    result.push(tempArr[i + 1]);
                break;
            case `--double-prev`:
                if (tempArr[i - 1])
                    result.push(tempArr[i - 1]);
                break;
            default:
                if (tempArr[i])
                    result.push(tempArr[i]);
        }
    };
    return result;
}

module.exports = {
    transform
};