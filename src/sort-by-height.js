const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    arr.forEach((a, i) => {
        if (a !== -1) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] !== -1) {
                    if (arr[i] > arr[j]) {
                        let c = arr[i];
                        arr[i] = arr[j];
                        arr[j] = c;
                    }
                }
            }
        }
    });
    return arr;
}

module.exports = {
    sortByHeight
};