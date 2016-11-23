/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    var sarr = s.split("");
    var length = s.length;
    var result = [];
    var pointer = 0;
    var flag = 1;
    for (i = 0; i < length ; i++) {
        if(!result[pointer]) {
            result[pointer] = '';
        }
        result[pointer] += sarr[i];
        if (pointer === 0 && flag == -1) {
            flag = 1;
        } else if (pointer == numRows - 1 && flag == 1) {
            flag = -1;
        }
        pointer += flag;
    }
    return result.join('');
};
