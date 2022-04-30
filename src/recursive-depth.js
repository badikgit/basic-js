const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        if (arr.filter(item => Array.isArray(item)).length != 0) {
            try {
                return 1 + this.calculateDepth([].concat(...arr.filter(item => Array.isArray(item))))
            } catch {
                throw new NotImplementedError('Not implemented');
            }
        } else {
            return 1
        }
    }
}

module.exports = {
    DepthCalculator
};